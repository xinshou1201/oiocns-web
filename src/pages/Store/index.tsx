import React from 'react';
import { renderRoutes } from 'react-router-config';

import BreadCrumb from '@/components/BreadCrumb';
import ContentTemplate from '@/components/ContentTemplate';
import { IRouteConfig } from '@/routes/config';

import StoreClassify from './Classify';

const Store: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  const sider = <StoreClassify></StoreClassify>;
  const contentTopLeft = <BreadCrumb></BreadCrumb>;
  const content = <div>{renderRoutes(route.routes)}</div>;
  return (
    <ContentTemplate sider={sider} contentTopLeft={contentTopLeft} content={content} />
  );
};

export default Store;
