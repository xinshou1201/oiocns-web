import { Layout } from 'antd';
import React from 'react';

// import useStore from '@/store';
import styles from './index.module.less';
import OrganizationalUnits from '@/components/OgnazitionUnit';
import RightContent from './RightContent';

const { Header } = Layout;

const customHeader: React.FC = () => {
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
      <OrganizationalUnits />
      <RightContent />
    </Header>
  );
};

export default customHeader;
