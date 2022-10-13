import { Layout } from 'antd';
import React from 'react';

// import logo from '@/assets/img/logo.png';
// import useStore from '@/store';
import styles from './index.module.less';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const { Header } = Layout;

const MyHeader: React.FC = () => {
  //   const user = useStore((state) => state.user);

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
      <RightContent />
      {/* <Dropdown overlay={menu}>
        <Space>
          <Avatar src={logo} />
          {user?.username}
        </Space>
      </Dropdown> */}
    </Header>
  );
};

export default MyHeader;
