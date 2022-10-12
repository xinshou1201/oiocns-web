import { Layout } from 'antd';
import React from 'react';
import { renderRoutes } from 'react-router-config';

import GlobalFooter from '@/components/GlobalFooter';
import type { IRouteConfig } from '@/routes/config';

const { Content, Header, Sider } = Layout;

const PassportLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          {renderRoutes(route.routes)}
          <GlobalFooter></GlobalFooter>
        </Content>
      </Layout>
    </Layout>
  );
};
export default PassportLayout;
