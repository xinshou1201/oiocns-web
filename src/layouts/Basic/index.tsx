import { Layout } from 'antd';
import { createBrowserHistory } from 'history';
import React from 'react';
import { renderRoutes } from 'react-router-config';

import MyMenu from '@/components/Menu';
import { IRouteConfig } from '@/routes/config';

import ContentBreadcrumb from './ContentBreadcrumb';
import Header from './Header';

const { Content } = Layout;

const BasicLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  const history = createBrowserHistory();

  if (!localStorage.getItem('Token')) {
    history.push('/user/login');
  }

  return (
    <Layout>
      <Header />
      <Layout>
        <MyMenu />
        <Layout style={{ marginLeft: 16, marginTop: 16 }}>
          <ContentBreadcrumb />
          <Content
            style={{
              height: 'calc(100vh - 60px)',
              marginTop: 12,
              backgroundColor: '#fff',
            }}>
            {renderRoutes(route.routes)}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
