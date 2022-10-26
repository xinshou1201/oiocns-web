import API from '../../services';
import { IdPage, Page, PageData, PageResponse } from '../typings';
import { IdPageReq, PageReq, toArrayData, toPageData } from './../index';
import { Company } from '.';

import useUserStore from '@/store/user';

/**
 * 单位(公司)业务
 */
class CompanyService {
  /**
   * 获取用户已加入的单位组织
   */
  public getJoinedCompany(page: Page): Promise<Company[]> {
    return API.company.getJoinedCompany({ data: new PageReq(page) }).then(
      (res: PageResponse<Company>): Company[] => {
        if (res.success) {
          const joinedCompanies = res.data?.result || [];
          // 设置状态存储
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
  public getGroupCompanies(idpage: IdPage): Promise<Company[]> {
    return API.company.getGroupCompanies({ data: new IdPageReq(idpage) }).then(
      (res: PageResponse<Company>): Company[] => toArrayData(res),
      (error: any) => {
        throw error;
      },
    );
  }

  /**
   * 搜索单位(公司)
   * @returns 单位、公司列表
   */
  public searchCompany(page: Page): Promise<PageData<Company>> {
    return API.company.searchCompany({ data: new PageReq(page) }).then(
      (res: PageResponse<Company>): PageData<Company> => toPageData(res),
      (error: any) => {
        throw error;
      },
    );
  }
}
const companyService = new CompanyService();

export default companyService;
