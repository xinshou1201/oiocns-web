import { Layout } from 'antd';
import React from 'react';
import { renderRoutes } from 'react-router-config';

import { IRouteConfig } from '@/routes/config';

import HeaderApp from './HeaderApp';
import HeaderChat from './HeaderChat';
import HeaderHome from './HeaderHome';
import HeaderSearch from './HeaderSearch';
import HeaderSetting from './HeaderSetting';
import HeaderStore from './HeaderStore';
import HeaderUser from './HeaderUser';
import HeaderWorkSpace from './HeaderWorkSpace';
const { Content, Header } = Layout;

const BasicLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  return (
    <Layout>
      <Header>
        <HeaderWorkSpace />
        <HeaderSearch />
        <HeaderHome />
        <HeaderChat />
        <HeaderStore />
        <HeaderApp />
        <HeaderUser />
        <HeaderSetting />
        <HeaderUser />
      </Header>
      <Content style={{ height: 'calc(100vh - 60px)' }}>
        {renderRoutes(route.routes)}
      </Content>
    </Layout>
  );
};

export default BasicLayout;
