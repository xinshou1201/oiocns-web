import './index.less';

import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';

import { IRouteConfig } from '@/routes/config';
import useStore from '@/store';

import BasicHeader from './Header';

type BasicLayoutProps = {
  route: IRouteConfig;
  history: any;
};
const { Content } = Layout;
// export const layoutRoutes = createContext<IRouteConfig[] | undefined>(undefined);

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { route, history } = props;
  const { getUserInfo } = useStore((state) => ({ ...state }));
  useEffect(() => {
    if (!sessionStorage.getItem('Token')) {
      history.push('/passport/login');
    } else {
      getUserInfo();
    }
  }, []);

  return (
    <Layout>
      {/* 公共头部 */}
      <BasicHeader />
      {/* 内容区域 */}
      <Layout>
        <Content>{renderRoutes(route.routes)}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
