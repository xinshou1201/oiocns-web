import { Layout } from 'antd';
// import { createBrowserHistory } from 'history';
import React from 'react';
import { renderRoutes } from 'react-router-config';

// import CustomHeader from '@/components/Header/Header';
import CustomMenu from '@/components/Menu';
import { IRouteConfig } from '@/routes/config';

import ContentBreadcrumb from './ContentBreadcrumb';
import CustomHeader from './Header';
type BasicLayoutProps = {
  route: IRouteConfig;
};
const { Content } = Layout;

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { route } = props;
  // const history = createBrowserHistory();

  // if (!localStorage.getItem('Token')) {
  //   history.push('/user/login');
  // }
  console.log('router', route);

  return (
    <Layout>
      {/* 公共头部 */}
      <CustomHeader />
      {/* 内容区域 */}
      <Layout>
        <CustomMenu />
        <Layout style={{ marginLeft: 16, marginTop: 16 }}>
          <ContentBreadcrumb />
          <Content
            style={{
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
