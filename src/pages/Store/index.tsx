import React from 'react';
import { renderRoutes } from 'react-router-config';

import ContentTemplate from '@/components/ContentTemplate';
import { IRouteConfig } from '@/routes/config';

import StoreClassify from './Classify';

const Store: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  return (
    <ContentTemplate sider={<StoreClassify />} content={renderRoutes(route.routes)} />
  );
};

export default Store;
