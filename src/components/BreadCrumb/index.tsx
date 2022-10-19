import { Breadcrumb } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import routes, { IRouteConfig } from '../../routes/config';
import { IconFont } from '../IconFont';
import cls from './index.module.less';

const breadcrumbNameMap: Record<string, IRouteConfig> = {};

/**
 * 遍历路由，初始化映射关系
 * @param routes 路由
 */
const initMap = (routes: IRouteConfig[]) => {
  routes.forEach((route) => {
    breadcrumbNameMap[route.path] = route;
    if (route.routes && route.routes.length > 0) {
      initMap(route.routes);
    }
  });
};

/**
 * 全局面包屑
 * @returns
 */
const BreadCrumb: React.FC = () => {
  initMap(routes);
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  // TODO 修改样式
  const items = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url} className={cls['comp-breadcrumb']}>
        <Link to={url}>{breadcrumbNameMap[url].title}</Link>
        {url === location.pathname &&
        breadcrumbNameMap[url].icon &&
        typeof breadcrumbNameMap[url].icon !== 'string' ? (
          <span className={cls['comp-breadcrumb-icon']}>
            {breadcrumbNameMap[url].icon}
          </span>
        ) : (
          <IconFont
            type={breadcrumbNameMap[url].icon as string}
            className={cls['comp-breadcrumb-icon']}
          />
        )}
      </Breadcrumb.Item>
    );
  });
  return (
    <div className={cls['comp-breadcrumb-comtainer']}>
      <Breadcrumb>{items}</Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
