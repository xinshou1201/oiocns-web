import React from 'react';
import { renderRoutes } from 'react-router-config';

import ContentTemplate from '@/components/ContentTemplate';
import { IRouteConfig } from '@/routes/config';

import TodoMenu from './Menu';

const Todo: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  const sider = <TodoMenu></TodoMenu>;

  const content = <div>{renderRoutes(route.routes)}</div>;
  return <ContentTemplate sider={sider} content={content} />;
};

export default Todo;
