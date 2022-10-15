import { Layout } from 'antd';
import React from 'react';

import PersonMenu from './Menu';
import PersonHeader from './Header';

import { renderRoutes } from 'react-router-config';
import { IRouteConfig } from '@/routes/config';

const { Header, Sider, Content } = Layout;

/**
 * 个人
 * @returns 
 */
const Person: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  return (
    <Layout>
      <Sider width={250}>
        <PersonMenu></PersonMenu>
      </Sider>
      <Layout>
        <Header>
          <PersonHeader></PersonHeader>
        </Header>
        <Content>
          <div>{renderRoutes(route.routes)}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Person;
