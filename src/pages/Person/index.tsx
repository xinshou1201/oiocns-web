import React from 'react';
import { renderRoutes } from 'react-router-config';

import BreadCrumb from '@/components/BreadCrumb';
import ContentTemplate from '@/components/ContentTemplate';
import { IRouteConfig } from '@/routes/config';

import PersonMenu from './Menu';

/**
 * 个人
 * @returns
 */
const Person: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  const sider = <PersonMenu></PersonMenu>;
  const contentTopLeft = <BreadCrumb></BreadCrumb>;
  const content = <div>{renderRoutes(route.routes)}</div>;
  return (
    <ContentTemplate sider={sider} contentTopLeft={contentTopLeft} content={content} />
  );
};

export default Person;
