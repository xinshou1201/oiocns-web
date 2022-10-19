// 因此不需要在最外层提供一个类似redux的Provider包裹层
import create from 'zustand';

// 数据持久化，会缓存到 storage
// import { persist } from 'zustand/middleware';

// 创建 store
// eslint-disable-next-line no-unused-vars
const useChatStore = create<any>((set: any, _get: any) => ({
  chats: [],
  setChats: async (data: any) => {
    console.log('打印chat', data);

    set({ user: [...data] });
  },
}));

// 暴露单一实例
export default useChatStore;
