import { Layout, Typography } from 'antd';
import React from 'react';
import { renderRoutes } from 'react-router-config';

import type { IRouteConfig } from '@/routes/config';

const { Content, Footer } = Layout;
const { Text } = Typography;

const UserLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  return (
    <Layout>
      <Content>{renderRoutes(route.routes)}</Content>
      <Footer>
        <Text>
          Vite2.0 + React + Antd <Text type="secondary"></Text>
        </Text>
      </Footer>
    </Layout>
  );
};
export default UserLayout;
