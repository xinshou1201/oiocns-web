import { Org, Team, User } from '../org';
/*
    平台待办审核 
    待办数据类型
*/
interface ApprovelTeam extends Team {
  target: Org;
}
interface ApprovalType {
  id: string;
  targetId: string;
  teamId: string;
  status: number;
  createUser: string;
  updateUser: string;
  version: string;
  createTime: string;
  updateTime: string;
  team: ApprovelTeam;
  target: Omit<User, 'team'>; // 排除User team字段
}
