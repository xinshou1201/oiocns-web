import { Breadcrumb } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import routes, { IRouteConfig } from '../../routes/config';

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

  // TODO 增加面包屑图标、修改样式
  const items = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url].title}</Link>
      </Breadcrumb.Item>
    );
  });
  return <Breadcrumb>{items}</Breadcrumb>;
};

export default BreadCrumb;
