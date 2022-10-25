import API from '../../services';
import { IdPage, Page, PageResponse, TableResponse } from '../typings';
import { IdPageReq, PageReq } from './../index';
import { Company } from '.';

import useUserStore from '@/store/user';

/**
 * 单位(公司)业务
 */
class CompanyService {
  /**
   * 获取用户已加入的单位组织
   */
  public getJoinedCompany(req: Page): Promise<Company[]> {
    return API.company.getJoinedCompany({ data: new PageReq(req) }).then(
      (res: PageResponse<Company>) => {
        if (res.success) {
          const joinedCompanies = res.data?.result || [];
          const { setJoinedCompanies } = useUserStore.getState();
          setJoinedCompanies(joinedCompanies);
          return joinedCompanies;
        } else {
          console.error(res.msg);
          return [];
        }
      },
      (error: any) => {
        throw error;
      },
    );
  }

  /**
   * 获取集团下的单位
   * @returns 单位、公司列表
   */
  public getGroupCompanies(req: IdPage): Promise<Company[]> {
    return API.company.getGroupCompanies({ data: new IdPageReq(req) }).then(
      (res: PageResponse) => {
        if (res.success) {
          return res.data;
        } else {
          console.error(res.msg);
          return [];
        }
      },
      (error: any) => {
        throw error;
      },
    );
  }
  /**
   * 搜索单位(公司)
   * @returns 根据编码搜索单位, 单位、公司表格需要的数据格式
   */
  public searchCompany(req: Page): Promise<TableResponse<Company[]>> {
    return API.company.searchCompany({ data: new PageReq(req) }).then(
      (res: PageResponse<Company>) => {
        const {
          data: { result = [], total = 0 },
          success,
        } = res;
        if (!success) {
          console.error(res.msg);
        }
        return { data: result, total, success }; //表格数据
      },
      (error: any) => {
        console.error(error);
      },
    );
  }
}
const companyService = new CompanyService();

export default companyService;
