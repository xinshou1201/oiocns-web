import { Layout } from 'antd';
// import { createBrowserHistory } from 'history';
import React from 'react';
import { renderRoutes } from 'react-router-config';

import CustomHeader from '@/components/Header/Header';
// import MyMenu from '@/components/Menu';
import { IRouteConfig } from '@/routes/config';

const { Content } = Layout;

const BasicLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  // const history = createBrowserHistory();

  // if (!localStorage.getItem('Token')) {
  //   history.push('/user/login');
  // }
  console.log('router', route);

  return (
    <Layout style={{ height: '100vh' }}>
      {/* 公共头部 */}
      <CustomHeader />
      {/* 内容区域 */}
      <Layout style={{ height: '100%' }}>
        {/* <MyMenu /> */}
        <Content>{renderRoutes(route.routes)}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
