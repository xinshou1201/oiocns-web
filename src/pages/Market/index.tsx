import './index.less';

import React from 'react';
import { renderRoutes } from 'react-router-config';

import BreadCrumb from '@/components/BreadCrumb';
import ContentTemplate from '@/components/ContentTemplate';
import { IRouteConfig } from '@/routes/config';

import MarketClassify from './Classify';

interface PageType {
  route: IRouteConfig;
  history: any;
}

/**
 * @desc: 市场 容器页面
 * @return {*}
 */
const Market: React.FC<PageType> = ({ route, history }) => {
  return (
    <ContentTemplate
      sider={<MarketClassify history={history} />}
      contentTopLeft={<BreadCrumb />}
      content={<>{renderRoutes(route.routes)}</>}
    />
  );
};

export default Market;
