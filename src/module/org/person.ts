import API from '../../services';
import { PageResponse } from '../typings';
import { PageReq } from './../index';
import { Person } from '.';

/**
 * 人员(用户)业务
 */
class PersonService {
  /**
   * 搜索人员
   * @returns 单位、公司列表
   */
  public searchPerson(params: string | PageReq): Promise<Person[]> {
    let body: PageReq;
    if (typeof params === 'string') {
      body = { filter: params, offset: 0, limit: 20 };
    } else {
      body = params;
    }
    return API.person.searchPersons({ data: body }).then(
      (res: PageResponse<Person>) => {
        if (res.success) {
          return res.data.result || [];
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
}
const personService = new PersonService();

export default personService;
