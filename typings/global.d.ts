interface TestType {
  name: string;
}

interface DataType {
  [key: string]: any;
}

type PageShowType = 'table' | 'card'; //数据页面展示形式 表格 / 卡片

// 全局继承类 所需类型
interface CommonClassType<P> {
  List: P[]; //展示列表
  Total: number; //数据总数
  getList: <T extends { page: number; pageSize: number }>(params: T) => void; // 获取列表
  creatItem: (params: any) => void; // 获取列表
  updateItem: (params: any) => void; // 获取列表
  deleteItem: (targetId: string) => void; // 获取列表
  quitTarget: (targetId: string) => void; // 获取列表
  joinTarget: (targetId: string) => void; // 获取列表
}

interface CommonClassData {
  spaceName: string; //命名空间--用于区分功能
  searchApi: string; // 查 数据
  createApi: string; // 增 数据
  deleteApi: string; // 删 数据
  updateApi: string; // 改 数据
  joinTargetApi?: string; // 向...加入
  quitTargetApi?: string; // 从...退出
}
