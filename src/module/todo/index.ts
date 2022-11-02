import API from '@/services';
import { IdPageReq, PageReq, toPageData } from '../index';
import { ApprovalType } from './typings';
import { IdPage, Page } from '../typings';

type OrgType = '人员' | 'other';
interface statusItem {
  key: string;
  tab: string;
}
interface TodoServiceProps {
  statusList: statusItem[];
  currentActiveStatus: '1' | '2'; // 当前选中的状态
  approveApi: Function; // 同意api
  refuseApi: Function; // 拒绝api
  applyApi: Function; // 申请api
  retractApi: Function; // 撤销api
  // approve: (id: string) => void; // 同意/审核通过
  // refuse: (id: string) => void; // 拒绝/审核不通过
  // submitApply: (id: string) => void; // 发起申请
  // retractApply: (id: string) => void; // 撤销申请
}

class TodoService implements TodoServiceProps {
  statusList: statusItem[] = [
    { tab: '待办', key: '1' },
    { tab: '我的发起', key: '2' },
  ];
  approveApi: Function; // 同意api
  refuseApi: Function; // 拒绝api
  applyApi: Function; // 申请api
  retractApi: Function; // 撤销申请
  currentActiveStatus: '1' | '2' = '1';
  constructor(
    params: Pick<
      TodoServiceProps,
      'applyApi' | 'refuseApi' | 'approveApi' | 'retractApi'
    >,
  ) {
    this.approveApi = params.approveApi;
    this.refuseApi = params.refuseApi;
    this.applyApi = params.applyApi;
    this.retractApi = params.retractApi;
  }

  /*
  根据类型过滤
  */
  public groupApproveApplyData = (data: ApprovalType[], type: OrgType) => {
    const resultData = [];
    if (type === '人员') {
      for (let i = 0; i < resultData.length; i++) {
        const element = data[i];
        if (element.team.target.typeName === '人员') resultData.push(element);
      }
    } else {
      for (let i = 0; i < resultData.length; i++) {
        const element = data[i];
        if (element.team.target.typeName !== '人员') resultData.push(element);
      }
    }
    return resultData;
  };

  /* 获取我的审核列表 */
  public getApprove = async (params: IdPage) => {
    const data = await API.person.getAllApproval({
      data: new IdPageReq(params),
    });
    return toPageData<ApprovalType>(data);
  };

  /* 获取我的申请 */
  public getApply = async (params: IdPage) => {
    const data = await API.person.getAllApply({
      data: new IdPageReq(params),
    });
    return toPageData<ApprovalType>(data);
  };

  private opretionFn = async (fn: Function, params: { id: string }) => {
    const { msg, success } = await fn.call(fn, { data: params });
    return { msg, success };
  };
  /*获取列表*/
  public async getList<T extends DataType>(fn: Function, params: Page) {
    const data = await fn.call(fn, { data: new PageReq(params) });
    return toPageData<T>(data);
  }

  /** 拒绝*/
  public refuse = async (id: string) => {
    return await this.opretionFn(this.refuseApi, { id });
  };
  /* 同意*/
  public approve = async (id: string) => {
    return await this.opretionFn(this.applyApi, { id });
  };
  /**审核 */
  public submitApply = async (id: string) => {
    return await this.opretionFn(this.applyApi, { id });
  };
  /**回退 */
  public retractApply = async (id: string) => {
    return await this.opretionFn(this.retractApi, { id });
  };
}

// const todoService = new TodoService();

export default TodoService;
