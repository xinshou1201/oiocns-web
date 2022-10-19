/**
 *
 * Organization 相关严格类型
 *
 * ===========================================================
 */
/**
 * 组织分类
 */
 export enum OrgType {
  /* 单位、公司 */
  Company = '单位',
  /* 集团 */
  Group = '集团',
  /* 部门 */
  Dept = '部门',
  /* 工作组 */
  Cohort = '工作组',
  /* 职权、角色 */
  Authority = '角色',
  /* 身份 */
  Identity = '身份',
  /* 人员、用户 */
  Person = '人员',
}

/**
 * 团队
 */
export interface Team {
  id: string;
  name: string;
  code: string;
  targetId: string;
  remark: string;
  status: number;
  createUser: string;
  updateUser: string;
  version: string;
  createTime: string;
  updateTime: string;
}

/**
 * 组织
 */
export interface Org {
  id: string;
  name: string;
  code: string;
  typeName: string;
  thingId: string;
  status: number;
  createUser: string;
  updateUser: string;
  version: string;
  createTime: string;
  updateTime: string;
  team: Team;
}

/**
 * 单位、公司
 */
export interface Company extends Org {
  typeName: OrgType.Company;
}

/**
 * 集团
 */
export interface Group extends Org {
  typeName: OrgType.Group;
}

/**
 * 部门
 */
export interface Dept extends Org {
  typeName: OrgType.Dept;
}

/**
 * 工作组
 */
export interface Cohort extends Org {
  typeName: OrgType.Cohort;
}

/**
 * 职权、角色
 */
export interface Authority extends Org {
  typeName: OrgType.Authority;
}

/**
 * 身份
 */
export interface Identity extends Org {
  typeName: OrgType.Identity;
}

/**
 * 人员、用户
 */
export interface Person extends Org {
  typeName: OrgType.Person;
}
