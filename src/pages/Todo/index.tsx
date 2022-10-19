import React from 'react';
import { renderRoutes } from 'react-router-config';

import BreadCrumb from '@/components/BreadCrumb';
import ContentTemplate from '@/components/ContentTemplate';
import { IRouteConfig } from '@/routes/config';

import TodoMenu from './Menu';

const Todo: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  const sider = <TodoMenu></TodoMenu>;
  const contentTopLeft = <BreadCrumb></BreadCrumb>;
  const content = <div>{renderRoutes(route.routes)}</div>;
  return (
    <ContentTemplate sider={sider} contentTopLeft={contentTopLeft} content={content} />
  );
};

export default Todo;
