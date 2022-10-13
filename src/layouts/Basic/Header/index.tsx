import { Layout } from 'antd';
import React from 'react';

import { IRouteConfig } from '@/routes/config';

// import useStore from '@/store';
import styles from './index.module.less';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const { Header } = Layout;

const customHeader: React.FC<{ routes?: IRouteConfig[] }> = (props) => {
  const { routes } = props;

  //   const handleChange = (e: { key: string }) => {
  //     if (e.key === '0') {
  //       localStorage.removeItem('Token');
  //       window.location.href = '/user/login';
  //     }
  //   };

  //   const menu = (
  //     <Menu onClick={handleChange}>
  //       <Menu.Item key="0">退出登录</Menu.Item>
  //     </Menu>
  //   );
  return (
    <Header className={styles[`layout-header`]}>
      <LeftContent />
      <RightContent routes={routes} />
      {/* <Dropdown overlay={menu}>
        <Space>
          <Avatar src={logo} />
          {user?.username}
        </Space>
      </Dropdown> */}
    </Header>
  );
};

export default customHeader;
