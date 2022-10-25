import { IdPageReq } from './../index';
// 市场业务
import API from '@/services';
import { MarketTypes } from 'typings/marketType';
import { PageReq } from '../index';

import { IdPage, Page } from '../typings';
// public 是默认可见性，所以，'可以直接省略'
// protected: 表示'受保护的',仅对其声明所在类和子类中 (非实例对象) 可见
// private: 表示'私有的,只在当前类中可见'，对实例对象以及子类也是不可见的
// readonly： 表示'只读',用来防止在构造函数之外对属性进行赋值
// static 静态数据

class MarketServices {
  // 市场数据
  public marketList: MarketTypes.MarketType[] = []; //商店列表
  public marketTotal: number = 0; //商店列表 总数
  private QueryParams: any; //记录历史请求参数
  public PUBLIC_STORE: MarketTypes.MarketType = {} as MarketTypes.MarketType; //共享仓库信息

  // 应用数据
  public myProductList: MarketTypes.ProductType[] = []; //我的应用列表数据
  public myProductTotal: number = 0; //我的应用列表数据 总数

  // 共享仓库数据
  publicStoreList: MarketTypes.ProductType[] = []; //共享仓库应用列表
  publicStoreTotal: number = 0; //共享仓库应用总数

  constructor() {
    // 获取共享仓库信息
    this.getPublicStore();
  }
  /**
   * @desc: 获取市场列表
   * @param {number} params.offset 起始位置
   * @param {number} params.limit  数量限制
   * @param {string} params.filter 过滤关键字
   * @return {*}
   */

  public async getMarketList(params: Page): Promise<void> {
    const { data, success } = await API.market.searchOwn({
      data: new PageReq(params),
    });
    if (success) {
      const { result = [], total = 0 } = data;
      this.marketList = result;
      this.marketTotal = total;
      //记录搜索条件
      this.QueryParams = params;
    }
  }

  /**
   * @desc: 创建市场
   * @param {string} params.name 商店名称
   * @param {string} params.code  商店编码
   * @param {string} params.samrId
   * @param {string} params.authId   空间为组织单位时取组织单位 的authId
   * @param {string} params.remark 备注
   * @param {boolean} params.public 是否公开
   * @return {*}
   */
  public async creatMarket(params: {
    name: string;
    code: string;
    samrId: string;
    authId: string;
    remark: string;
    public: boolean;
  }) {
    const { success } = await API.appstore.create({
      data: params,
    });
    if (success) {
      await this.getMarketList(this.QueryParams);
    }
  }

  /**
   * @desc: 更新商店信息
   * @param {string} params.id        商店id
   * @param {string} params.name      商店名称
   * @param {string} params.code      商店编码
   * @param {string} params.samrId    空间为组织单位时取组织单位 的authId
   * @param {string} params.remark    备注
   * @param {boolean} params.public   是否公开
   * @return {*}
   */
  public async updateMarket(params: {
    id: string;
    name: string;
    code: string;
    samrId: string;
    authId: string;
    remark: string;
    public: boolean;
  }) {
    const { success } = await API.appstore.updateMarket({
      data: params,
    });
    if (success) {
      await this.getMarketList(this.QueryParams);
    }
  }
  /**
   * @desc: 删除 管理的市场
   * @param {string} id 市场id
   * @return {*}
   */

  public async deleteMarket(id: string) {
    const { success } = await API.appstore.marketDel({
      data: { id },
    });
    if (success) {
      await this.getMarketList(this.QueryParams);
    }
  }
  /**
   * @desc: 退出市场
   * @param {string} id 市场Id
   * @return {*}
   */
  public async quitMarket(id: string | number) {
    const { success } = await API.appstore.marketQuit({
      data: { id },
    });
    if (success) {
      await this.getMarketList(this.QueryParams);
    }
  }

  /**
   * @desc: 获取共享仓库信息
   * @return {*}
   */
  public async getPublicStore() {
    if (this.PUBLIC_STORE?.id) {
      return;
    }
    const { success, data } = await API.market.getSoftShareInfo();
    if (success) {
      this.PUBLIC_STORE = data;
    }
  }

  /**
   * @desc 获取应用中心中我的应用
   * @param {number} params.page 起始位置
   * @param {number} params.pageSize  数量限制
   * @param {string} params.filter 过滤关键字
   */
  public async getMyProductList(params: Page) {
    const { data, success } = await API.product.searchOwnProduct({
      data: new PageReq(params),
    });
    if (!success) {
      return;
    }
    const { result = [], total = 0 } = data;
    this.myProductTotal = result;
    this.myProductTotal = total;
  }
  /**
   * @desc 删除应用
   * @param { number| string} id 所选应用id
   * @return {boolean} 返回是否成功
   */
  public async deleteApp(id: string) {
    const { success } = await API.product.delete({
      data: { id },
    });
    return success;
  }
  /**
   * @desc 获取购物车数量
   * @return 返回购物车数量
   */
  public async getShopcarNum() {
    const { total = 0, success } = await API.market.searchStaging({
      data: {
        offset: 0,
        limit: 20,
        filter: '',
      },
    });
    if (!success) {
      return 0;
    }
    return total;
  }
  /**
   * @desc  删除资源信息
   * @param selectId 资源id
   */
  public async deleteResource(selectId: string) {
    const { success } = await API.product.deleteResource({ data: { id: selectId } });
    return success;
  }

  /**
   * @desc  处理资源移动
   * @param resources 资源信息
   */
  public handleSortMenu(resources: any, type: 'Up' | 'Down', aimId: string) {
    const data = resources;
    // 根据当前所选标志 获取目标数据信息
    const obj = data.find((item: any) => item.customId === aimId);

    const idArr = data.map((item: MarketTypes.AppResourcesType) => item.customId);
    const index = idArr.indexOf(aimId);
    const endIndex = data.length - 1;
    const willChageIndex = type === 'Up' ? index - 1 : index + 1;
    // 若最后一个选择向下排序/第一个向上,则终止
    if (
      (type === 'Down' && willChageIndex > endIndex) ||
      (type === 'Up' && index === 0)
    ) {
      return;
    }
    // 若最后一个选择向下排序,则终止
    if (index > -1) {
      const willChangeObj = data[willChageIndex];
      data[index] = willChangeObj;
      data[willChageIndex] = obj;
    }
  }

  /**
   * @desc  注册应用
   * @param params 填写的应用信息
   * @return 返回接口调用结果
   */
  public async onRegister(params: any) {
    console.log(params);

    const { success } = await API.product.register({
      data: params,
    });
    return success;
  }

  /**
   * @desc 获取应用信息
   * @param appId 应用id
   */
  public async queryInfo(appId: string) {
    const { data, success } = await API.product.queryInfo({
      data: {
        id: appId,
      },
    });
    if (!success) {
      return {};
    }
    return data;
  }

  /**
   *@desc 获取应用资源
   * @param appid 应用id
   * @return 返回应用资源
   */
  public async getResource(appid: string) {
    const { data, success } = await API.product.searchResource({
      data: {
        id: appid,
        offset: 0,
        limit: 1000,
        filter: '',
      },
    });
    if (!success) {
      return;
    }
    const { result = [] } = data;
    let tabs = result;
    return tabs;
  }

  /**
   * @desc 修改应用信息
   * @param params 应用信息
   */
  public async updateProduct(params: any) {
    const { success } = await API.product.update({
      data: params,
    });
    if (success) {
      alert('修改应用信息完成');
    }
  }
  /**
   *@desc 应用上架
   *@param  formLabelAlign 表单填写数据
   */
  public async publishProduct(formLabelAlign: any) {
    const { success } = await API.product.publish({
      data: formLabelAlign,
    });
    if (success) {
      // getPageList()
      alert('已提交上架申请');
    }
  }

  /**
   * @desc 获取应用上架列表
   * @param id 应用id
   * @param page 分页参数
   * @return 列表数据以及总数
   */
  public async searchMerchandiseSellList(id: string, page: any) {
    const { data, success } = await API.order.searchMerchandiseSellList({
      data: {
        id: id,
        offset: (page.currentPage - 1) * page.pageSize,
        limit: page.pageSize,
        filter: '',
      },
    });
    if (!success) {
      return;
    }
    const { result = [], total = 0 } = data;
    let obj = {
      result,
      total,
    };
    return obj;
  }
  /**
   * @desc 应用下架
   * @param id 应用id
   * @return 接口请求成功
   */
  public async unpublishApp(id: string) {
    const { success } = await API.product.unpublishMerchandise({
      data: {
        id: id,
      },
    });
    if (!success) {
      return;
    }
    console.info('下架成功');

    return success;
  }

  /**
   * @desc 查询上架申请
   * @param id 应用id
   * @param page 分页参数
   * @return 接口请求成功
   */
  public async searchPublishList(id: string, page: any) {
    const { data, success } = await API.product.searchPublishList({
      data: {
        id: id,
        offset: (page.currentPage - 1) * page.pageSize,
        limit: page.pageSize,
        filter: '',
      },
    });
    if (!success) {
      return;
    }
    const { result = [], total = 0 } = data;
    let obj = {
      result,
      total,
    };
    return obj;
  }

  /**
   * @desc 加入购物车
   * @param id 应用id
   * @return 接口请求成功
   */
  public async staging(id: string) {
    const { success } = await API.appstore.staging({
      data: {
        id: id,
      },
    });
    if (!success) {
      return;
    }
    console.info('添加成功');
  }

  /**
   * @desc 获取共享仓库应用列表
   * @param id 应用id
   * @param page 分页参数
   * @param search 查询参数
   * @return 返回列表信息和总值
   */
  public async merchandise(params: IdPage) {
    params = { ...params, id: this.PUBLIC_STORE.id };
    const { success, data } = await API.appstore.merchandise({
      data: new IdPageReq(params),
    });
    console.log('请求信息', params, new IdPageReq(params));

    if (!success) {
      return;
    }
    const { result = [], total = 0 } = data;
    this.publicStoreList = result;
    this.publicStoreTotal = total;
  }

  /**
   * @desc 获取我的应用
   * @return 返回我的应用列表
   */
  public async searchUsefulProduct() {
    const { data, success } = await API.product.searchUsefulProduct({
      data: {
        offset: 0,
        limit: 6,
        filter: '',
      },
    });
    if (!success) {
      return;
    }
    const { result = [] } = data;
    return result;
  }

  /**
   * @desc /查询组织/个人拥有的资源列表
   * @id  点击的应用id
   * @return 返回资源列表
   */
  public async queryOwnResource(id: number) {
    const { data, success } = await API.product.queryOwnResource({
      data: {
        id: id,
        offset: 0,
        limit: 10,
        filter: '',
      },
    });
    if (!success) {
      return;
    }
    return data;
  }
}
const marketServices = new MarketServices();
export default marketServices;
