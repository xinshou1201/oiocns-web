/**
 * 公共返回Response
 * 请求体
 */
export type CommonResponse = {
  code: number;
  data: Record<string, any>;
  msg: string;
  success: boolean;
};

/**
 * 扩展
 * 请求体
 */
export type ExtendReq = {
  teamId: number | string;
  sourceId: number | string;
  sourceType: string;
  destIds: number[] | string[];
  destType: string;
};

/**
 * ID分页查询
 * 请求体
 */
export type IdPageReq = {
  id: number | string;
  offset: number;
  limit: number;
  filter: string;
};

/**
 * ID查询
 * 请求体
 */
export type IdReq = {
  id: number | string;
};

/**
 * ID和状态分页查询
 * 请求体
 */
export type IdStatusPageReq = {
  id: number | string;
  status: number | string;
  offset: number;
  limit: number;
  filter: string;
};

/**
 * ID和状态查询
 * 请求体
 */
export type IdStatusReq = {
  id: number | string;
  status: number | string;
};

/**
 * 分页查询
 * 请求体
 */
export type PageReq = {
  offset: number;
  limit: number;
  filter?: string;
};

/**
 * 查询扩展
 * 请求体
 */
export type QueryExtendReq = {
  teamId: number | string;
  sourceId: number | string;
  sourceType: string;
  destType: string;
};

/**
 * 通过状态字段分页查询
 * 请求体
 */
export type StatusPageReq = {
  status: number | string;
  offset: number;
  limit: number;
  filter: string;
};

/**
 * 分页搜索
 */
export type SearchReq = {
  offset: number;
  limit: number;
  filter?: string;
};


