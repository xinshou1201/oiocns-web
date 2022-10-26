import React from 'react';
import { renderRoutes } from 'react-router-config';

import ContentTemplate from '@/components/ContentTemplate';
import { IRouteConfig } from '@/routes/config';

import TodoMenu from './Menu';

const Todo: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  const sider = <TodoMenu></TodoMenu>;

  return <ContentTemplate sider={sider}>{renderRoutes(route.routes)}</ContentTemplate>;
};

export default Todo;
