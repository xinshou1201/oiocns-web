import { Avatar, Button, Dropdown, Layout, Menu, Space } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '@/assets/imgs/logo.png';
import useStore from '@/store';

import cls from './index.module.less';
const { Header } = Layout;

const MyHeader: React.FC = () => {
  const history = useHistory();
  const user = useStore((state) => state.user);

  const handleChange = (e: { key: string }) => {
    if (e.key === '0') {
      localStorage.removeItem('Token');
      window.location.href = '/user/login';
    }
  };
  const handleChange2 = (key: any) => {
    if (key) {
      history.replace(key);
    }
  };
  const menu = (
    <Menu onClick={handleChange}>
      <Menu.Item key="0">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <Header className={cls.layout_header}>
      <Space>
        <Button type="primary" shape="circle" onClick={() => handleChange2('/org/home')}>
          首页
        </Button>
        <Button type="primary" shape="circle" onClick={() => handleChange2('/org/chat')}>
          消息
        </Button>
        <Button
          type="primary"
          shape="circle"
          onClick={() => handleChange2('/org/market')}>
          市场
        </Button>
        <Button type="primary" shape="circle" onClick={() => handleChange2('/org/store')}>
          仓库
        </Button>
      </Space>
      <Dropdown overlay={menu}>
        <Space>
          <Avatar src={logo} />
          {user?.username}
        </Space>
      </Dropdown>
    </Header>
  );
};

export default MyHeader;
