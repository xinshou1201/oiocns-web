/* eslint-disable no-unused-vars */
interface InfoProps {
  userId: string;
  username: string;
  phone: string;
  desc: string;
}

interface MenuProps {
  id: string;
  path: string;
  title: string;
}

// 类型声明
export type StateProps = {
  /**@name 用户信息 */
  user: any;
  /**@name 数据列表 */
  list: any[];
  /**@name loading */
  loading: boolean;
  /**@name 当前修改项 */
  editItem: any;

  login: (val: any) => Promise<boolean>;
  setUser: (val: string) => void;
  setLoading: (val: boolean) => void;
  // 列表 增删改查
  getList: () => void;
  removeList: (id: string) => void;
  editList: (params: any) => void;
  addList: (params: any) => void;
  setEditItem: (params: any) => void;
};
