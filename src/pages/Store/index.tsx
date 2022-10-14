import { Layout } from 'antd';
import React from 'react';

import StoreApp from './App';
import StoreClassify from './Classify';
import StoreHeader from './Header';
import StoreRecent from './Recent';

const { Header, Sider, Content } = Layout;

const Store: React.FC = () => {
  return (
    <Layout>
      <Sider>
        <StoreClassify></StoreClassify>
      </Sider>
      <Layout>
        <Header>
          <StoreHeader></StoreHeader>
        </Header>
        <Content>
          <StoreRecent></StoreRecent>
          <StoreApp></StoreApp>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Store;
