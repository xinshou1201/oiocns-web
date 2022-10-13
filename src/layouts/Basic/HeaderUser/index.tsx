import { Avatar, Dropdown, Menu, Space } from 'antd';
import React from 'react';

import logo from '@/assets/logo.jpg';
import useStore from '@/store';

const HeaderUser: React.FC = () => {
  const user = useStore((state) => state.user);

  const handleChange = (e: { key: string }) => {
    if (e.key === '0') {
      localStorage.removeItem('Token');
      window.location.href = '/user/login';
    }
  };

  const menu = (
    <Menu onClick={handleChange}>
      <Menu.Item key="0">锁屏</Menu.Item>
      <Menu.Item key="0">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Space>
        <Avatar src={logo} />
        {user?.username}
      </Space>
    </Dropdown>
  );
};

export default HeaderUser;
