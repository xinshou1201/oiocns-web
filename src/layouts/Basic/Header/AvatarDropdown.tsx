import { LockOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, MenuProps, Spin } from 'antd';
import type { ItemType } from 'antd/es/menu/hooks/useItems';
import React from 'react';

import logo from '@/assets/img/logo.png';
import useStore from '@/store';

import HeaderDropdown from './HeaderDropdown';
import styles from './index.module.less';

import { useHistory } from 'react-router-dom';


const AvatarDropdown: React.FC = () => {
  const { user: currentUser } = useStore((state) => ({ ...state }));
  const history = useHistory();

  console.log(currentUser);



  /**
   * 退出登录
   */
  const logout = () => {
    // 1. 清空Token
    // 2. 清空用户信息
    localStorage.removeItem('Token');
    window.location.href = '/passport/login';
  };

  /**
   * 锁屏
   */
  const lock  = () =>{
    history.push('/passport/lock');
  }

  /**
   * 前往个人中心
   */
  const personInfo  = () =>{
    history.push('/person/info');
  }

  const onClick: MenuProps['onClick'] = e => {
    switch (e.key) {
      case 'logout':
        logout();
        break;
      case 'person/info':
        personInfo();
        break;
      case 'lock':
        lock();
        break;
      default:
        break;
    }
  };

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin size="small" className={styles.loading} />
    </span>
  );

  if (!currentUser) {
    return loading;
  }

  if (!currentUser || !currentUser.userName) {
    return loading;
  }

  const menuItems: ItemType[]= [
    {
      key: 'person/info',
      icon: <UserOutlined />,
      label: '个人中心',
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'lock',
      icon: <LockOutlined />,
      label: '离开锁屏',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    }
  ];

  const menuHeaderDropdown = (
    <Menu className="menu" selectedKeys={[]} items={menuItems} onClick={onClick}/>
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown} placement="bottomLeft">
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar className="avatar" src={currentUser.avatar || logo} alt="avatar" />
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
