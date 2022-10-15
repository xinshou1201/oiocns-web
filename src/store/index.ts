// zustand 采用观察者模式，对组件进行订阅更新，
// 因此不需要在最外层提供一个类似redux的Provider包裹层
import create from 'zustand';
// 数据持久化，会缓存到 storage
import { persist } from 'zustand/middleware';
import Person from '@/module/person';
// import { login } from '@/api/user';
import $API from '@/services';

// 模拟请求延迟
// import { sleep } from './sleep';
import { StateProps, UserType } from './type';

// 创建 store
const useStore = create(
  persist<StateProps>(
    (set, get) => ({
      user: {},
      list: [],
      userSpace: {},
      loading: false,
      editItem: undefined,
      login: async (val) => {
        const res = await $API.person.login({
          data: val,
        });
        if (res.success) {
          set({
            user: res.data,
            userSpace: { name: res.data.workspaceName, id: res.data.workspaceId },
          });
          sessionStorage.setItem('Token', res.data.accessToken);
          get().getUserInfo();
          return true;
        }
        return false;
      },
      setUser: async (data: UserType) => {
        set({ user: data });
      },
      setLoading: (val: boolean) => set({ loading: val }),
      setEditItem: (params: any) => set({ editItem: params }),
      getUserInfo: async () => {
        const { data, success } = await Person.getUserInfo();
        if (success) {
          set((state) => ({
            user: { ...state.user, identitys: data.identitys, team: data.team },
          }));
        }
      },
      // // 获取列表
      // getList: async () => {
      //   await sleep(1000);
      //   set({ list: dataSource });
      // },
      // // 删除
      // removeList: async (val) => {
      //   dataSource = dataSource.filter((n) => n.key !== val);
      //   get().getList();
      // },
      // // 修改
      // editList: async (params: any) => {
      //   dataSource = dataSource.map((n) => {
      //     if (n.key === params.key) {
      //       return { ...n, ...params };
      //     }
      //     return n;
      //   });
      //   get().getList();
      // },
      // // 添加
      // addList: async (params: any) => {
      //   dataSource = [{ ...params, key: `${dataSource.length + 1}` }, ...dataSource];
      //   get().getList();
      // },
    }),
    {
      name: 'user-storage',
      getStorage: () => sessionStorage,
    },
  ),
);

// 暴露单一实例 useStore
export default useStore;
