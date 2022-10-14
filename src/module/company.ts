import API from '@/services';

export type ListProps = Pick<PaginationProps, 'current' | 'pageSize'> &
  Partial<CommonParamsType>;
// 组织单位
class CompanyServices {
  private _formatPage = (params: ListProps) => {
    const sevicePage: CommonParamsType = {
      limit: params.pageSize,
      offset: params.current,
      ...params,
    };
    delete sevicePage.current;
    delete sevicePage.pageSize;
    return sevicePage;
  };
  /**
   * getJoinedCompany  获取用户已加入的单位组织
   * @params {ListProps}
   */
  public async getJoinedCompany(params: ListProps) {
    // 获取销售订单
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
