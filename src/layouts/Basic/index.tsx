import './index.less';

import { ConfigProvider, Layout } from 'antd';
import React, { createContext } from 'react';
import { renderRoutes } from 'react-router-config';

// import CustomHeader from '@/components/Header/Header';
// import CustomMenu from '@/components/Menu';
import { IRouteConfig } from '@/routes/config';

import ContentBreadcrumb from './ContentBreadcrumb';
import CustomHeader from './Header';
type BasicLayoutProps = {
  route: IRouteConfig;
};
const { Content } = Layout;
export const layoutRoutes = createContext<IRouteConfig[] | undefined>(undefined);

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { route } = props;

  return (
    <ConfigProvider prefixCls="ogo">
      <Layout className="page-layout">
        {/* 公共头部 */}
        <layoutRoutes.Provider value={route?.routes}>
          <CustomHeader />
        </layoutRoutes.Provider>
        {/* 内容区域 */}
        <Layout>
          {/* <CustomMenu /> */}
          <Layout className="page-container">
            <ContentBreadcrumb />
            <Content className="page-content">{renderRoutes(route.routes)}</Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default BasicLayout;
