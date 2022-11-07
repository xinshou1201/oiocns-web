import ObjectLay from './objectlay';

/**
 * 存储桶管理
 */
class Bucket {
  private expand: any[] = [];
  private refObj: boolean;
  public Root: ObjectLay;
  public Current: ObjectLay;
  private static instance: Bucket;
  /**
   * 私有构造方法，禁止外部实例化
   */
  constructor() {
    this.Root = new ObjectLay(null, {} as ObjectLay);
    this.Current = this.Root;
    this.refObj = true;
  }
  /**
   * 获取处理树形
   * @returns 树形
   */
  public HandleTree(rootData: any, data: any[], key: string) {
    for (let i = 0; i < rootData.length; i++) {
      if (rootData[i].Key == key) {
        rootData[i].children = data;
      } else {
        if (rootData[i].children[0]?.Key) {
          this.HandleTree(rootData[i].children, data, key);
        }
      }
    }
  }
  /**
   * 处理新建文件夹后回显的树形
   * @returns 树形
   */
  public HandleEchoTree(rootData: any, data: any) {
    for (let i = 0; i < rootData.length; i++) {
      if (rootData[i].Key == data.Key) {
        rootData[i].isLeaf = false;
        rootData[i].children = data.children;
      } else {
        if (rootData[i].children[0]?.Key) {
          this.HandleEchoTree(rootData[i].children, data);
        }
      }
    }
  }

  /**
   * 处理新建文件夹后回显的树形
   * @returns 树形
   */
  public GetKey() {
    return this.Current.Upload();
  }
  /**
   * 获取单例
   * @returns 单例
   */
  public static async GetInstance() {
    if (this.instance == null) {
      this.instance = new Bucket();
    }
    return this.instance;
  }
  /**
   * 获取左侧目录树
   * @returns 目录树结构
   */
  public GetLeftTree = async (data: any) => {
    let children;
    if (this.expand.includes(data.key)) {
      children = this.GetExpandTree(false, data);
    } else {
      this.expand.push(data.key);
      children = this.GetExpandTree(true, data);
    }
    return children;
  };

  public GetExpandTree = async (refresh: boolean, data: any) => {
    let arr = await data.GetChildren(refresh);
    let children: any[] = [];
    arr.forEach((el: any) => {
      if (el.HasSubDirectories) {
        el.children = [];
        el.isLeaf = false;
      } else {
        el.isLeaf = true;
      }
      if (el.IsDirectory) {
        children.push(el);
      }
    });
    return children.length > 0 ? children : [];
  };
  /**
   * 获取顶部导航条
   * @returns 导航条树结构
   */
  public GetTopBar() {}
  /**
   * 新建文件夹
   * @returns
   */
  public CreateFile = async (name: string) => {
    await this.Current.Create(name);
  };
  /**
   * 获取内容区数据
   * @returns 返回内容区数据
   */
  public GetContent = async (reload?: boolean) => {
    let children = await this.Current.GetChildren(reload);
    return children;
  };
}

const bucket = new Bucket();
export default bucket;
