import './index.less';

import { Layout } from 'antd';
import React, { createContext } from 'react';
import { renderRoutes } from 'react-router-config';

import { chat } from '@/module/chat/orgchat';
import { IRouteConfig } from '@/routes/config';

import ContentBreadcrumb from './ContentBreadcrumb';
import CustomHeader from './Header';
type BasicLayoutProps = {
  route: IRouteConfig;
  history: any;
};
const { Content } = Layout;
export const layoutRoutes = createContext<IRouteConfig[] | undefined>(undefined);

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { route, history } = props;

  // const history = createBrowserHistory();
  if (!sessionStorage.getItem('Token')) {
    history.push('/passport/login');
  }
  const token = sessionStorage.getItem('Token') as string;

  chat.start(token);

  return (
    <Layout className="page-layout">
      {/* 公共头部 */}
      <layoutRoutes.Provider value={route?.routes}>
        <CustomHeader />
      </layoutRoutes.Provider>
      {/* 内容区域 */}
      <Layout>
        {/* <CustomMenu /> */}
        <Layout className="page-container">
          <ContentBreadcrumb />
          <Content className="page-content">{renderRoutes(route.routes)}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
