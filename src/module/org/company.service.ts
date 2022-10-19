import API from '../../services';
import { CommonResponse, IdPageReq, PageReq } from './../typings';
import { Company } from '.';

// 单位(公司)业务
class CompanyService {
  /**
   * 获取用户已加入的单位组织
   * @params {ListProps}
   */
  public getJoinedCompany(req: PageReq): Promise<Company[]> {
    return API.company.getJoinedCompany({ data: req }).then(
      (res: CommonResponse) => {
        if (res.success) {
          return res.data?.result || [];
        } else {
          console.error(res.msg);
          return [];
        }
      },
      (error: any) => {
        console.error(error);
      },
    );
  }

  /**
   * 获取集团下的单位
   * @returns 单位、公司列表
   */
  public getGroupCompanies(req: IdPageReq): Promise<Company[]> {
    return API.person.getGroupCompanies({ data: req }).then(
      (res: CommonResponse) => {
        if (res.success) {
          return res.data;
        } else {
          console.error(res.msg);
          return [];
        }
      },
      (error: any) => {
        console.error(error);
      },
    );
  }
}
const companyService = new CompanyService();

export default companyService;
