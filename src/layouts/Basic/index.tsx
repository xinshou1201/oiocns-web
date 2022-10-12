import { ProLayout } from '@ant-design/pro-components';
import { Layout } from 'antd';
import { createBrowserHistory } from 'history';
import React from 'react';
import { renderRoutes } from 'react-router-config';

import MyHeader from '@/components/Header/Header';
import MyMenu from '@/components/Menu';
import { IRouteConfig } from '@/routes/config';

const { Content } = Layout;

const BasicLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  const history = createBrowserHistory();

  if (!localStorage.getItem('Token')) {
    history.push('/user/login');
  }

  return (
    <ProLayout layout="top">
      <MyHeader />
      <Layout>
        <MyMenu />
        <Content style={{ height: 'calc(100vh - 60px)' }}>
          {renderRoutes(route.routes)}
        </Content>
      </Layout>
    </ProLayout>
  );
};

export default BasicLayout;
