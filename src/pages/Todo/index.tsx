import React from 'react';
import { renderRoutes } from 'react-router-config';

import ContentTemplate from '@/components/ContentTemplate';
import { IRouteConfig } from '@/routes/config';

import TodoMenu, { muneItems } from './Menu';
import './index.less';
import { MenuProps } from 'rc-menu';
const Todo: React.FC<{ route: IRouteConfig; history: any }> = ({ route, history }) => {
  const sider = <TodoMenu></TodoMenu>;
  // 菜单跳转
  const toNext = (e: any) => {
    console.log(e);
    history.push(`/todo/${e.key}`);
    // console.log(menukeys);
  };
  return (
    <ContentTemplate
      sider={sider}
      siderMenuData={muneItems as MenuProps[`items`]}
      menuClick={toNext}>
      {renderRoutes(route.routes)}
    </ContentTemplate>
  );
};

export default Todo;
