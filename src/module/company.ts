import API from '@/services';

import Base from './base';

export type ListProps = Pick<PaginationProps, 'current' | 'pageSize'> &
  Partial<CommonParamsType>;
// 组织单位
class CompanyServices extends Base {
  /**
   * getJoinedCompany  获取用户已加入的单位组织
   * @params {ListProps}
   */
  public async getJoinedCompany(params: ListProps) {
    const { data, success } = await API.company.getJoinedCompany({
      data: this._formatPage(params),
    });
    if (!success) {
      return { data: [], total: 0, success };
    }
    const list = data.result;
    return { data: list || [], total: data.total || 0, success };
  }
}
const services = new CompanyServices();

export default services;
