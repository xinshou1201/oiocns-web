import API from '../../services';
import { PageResponse } from '../typings';
import { PageReq } from './../index';
import { Person } from '.';
import { ParamsType, RequestData } from '@ant-design/pro-components';

/**
 * 人员(用户)业务
 */
class PersonService {
  /**
   * 搜索人员
   * @returns 单位、公司列表
   */
  public searchPerson(p: ParamsType): Promise<RequestData<Person>> {
    const body: PageReq = {
      filter: p.keyword,
      offset: (p.current - 1) * p.pageSize || 0,
      limit: p.pageSize,
    };
    return API.person.searchPersons({ data: body }).then(
      (res: PageResponse<Person>) => {
        if (res.success) {
          return { data: res.data.result, total: res.data.total, success: true };
        } else {
          console.error(res.msg);
          return { data: [], total: 0, success: false };
        }
      },
      (error: any) => {
        throw error;
      },
    );
  }
}
const personService = new PersonService();

export default personService;
