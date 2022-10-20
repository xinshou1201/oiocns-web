import { IdPage, IdStatusPage, Page, StatusPage } from './typings';

/**
 * 分页查询
 * 请求体
 */
export class IdPageReq {
  id: number | string;
  offset: number;
  limit: number;
  filter?: string;
  constructor(p: IdPage) {
    this.id = p.id;
    this.offset = (p.page - 1) * p.pageSize || 0;
    this.limit = p.pageSize || 20;
    this.filter = p.filter;
  }
}

/**
 * 分页查询
 * 请求体
 */
export class StatusPageReq {
  status: number | string;
  offset: number;
  limit: number;
  filter?: string;
  constructor(p: StatusPage) {
    this.offset = (p.page - 1) * p.pageSize || 0;
    this.limit = p.pageSize || 20;
    this.filter = p.filter;
    this.status = p.status;
  }
}

/**
 * ID和状态分页查询
 * 请求体
 */
export class IdStatusPageReq {
  id: number | string;
  status: number | string;
  offset: number;
  limit: number;
  filter: string;
  constructor(p: IdStatusPage) {
    this.id = p.id;
    this.offset = (p.page - 1) * p.pageSize || 0;
    this.limit = p.pageSize || 20;
    this.filter = p.filter;
    this.status = p.status;
  }
}

/**
 * 分页查询
 * 请求体
 */
export class PageReq {
  offset: number;
  limit: number;
  filter?: string;
  constructor(p: Page) {
    this.offset = (p.page - 1) * p.pageSize || 0;
    this.limit = p.pageSize || 20;
    this.filter = p.filter;
  }
}
