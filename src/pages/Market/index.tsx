import { Layout } from 'antd';
import React from 'react';

import MarketClassify from './Classify';
import MarketHeader from './Header';

const { Header, Sider, Content } = Layout;

const Market: React.FC = () => {
  return (
    <Layout>
      <Sider width={250}>
        <MarketClassify></MarketClassify>
      </Sider>
      <Layout>
        <Header>
          <MarketHeader></MarketHeader>
        </Header>
        <Content>{'主要区域'}</Content>
      </Layout>
    </Layout>
  );
};

export default Market;
