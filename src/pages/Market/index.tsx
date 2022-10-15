import './index.less';

import { Layout } from 'antd';
import React from 'react';
import { renderRoutes } from 'react-router-config';
import MarketClassify from './Classify';
import MarketHeader from './Header';

const { Header, Sider, Content } = Layout;

const Market: React.FC<any> = (props) => {
  const { route, history } = props;

  console.log('搜索一样一样', route);
  return (
    <Layout className="market-wrap">
      <Sider width={250}>
        <MarketClassify history={history}></MarketClassify>
      </Sider>
      <Layout>
        <Header>
          <MarketHeader></MarketHeader>
        </Header>
        <Content>{renderRoutes(route.routes)}</Content>
      </Layout>
    </Layout>
  );
};

export default Market;
