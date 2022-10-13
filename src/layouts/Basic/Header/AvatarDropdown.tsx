import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import type { ItemType } from 'antd/es/menu/hooks/useItems';
import React from 'react';

import logo from '@/assets/img/logo.png';
import useStore from '@/store';

import HeaderDropdown from './HeaderDropdown';
import styles from './index.module.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const { user: currentUser } = useStore((state) => ({ ...state }));
  /**
   * 退出登录，并且将当前的 url 保存
   */
  // const loginOut = async () => {
  //   // await outLogin();
  //   const { search, pathname } = window.location;
  //   const urlParams = new URL(window.location.href).searchParams;
  //   /** 此方法会跳转到 redirect 参数所在的位置 */
  //   const redirect = urlParams.get('redirect');
  //   // Note: There may be security issues, please note
  //   if (window.location.pathname !== '/user/login' && !redirect) {
  //     // history.replace({
  //     //   pathname: '/user/login',
  //     //   search: stringify({
  //     //     redirect: pathname + search,
  //     //   }),
  //     // });
  //   }
  // };
  // const onMenuClick = (event: MenuInfo) => {
  //   console.log(event);
  //   // const { key } = event;
  //   // if (key === 'logout') {
  //   //   setUser(null);
  //   //   loginOut();
  //   //   return;
  //   // }
  //   // history.push(`${key}`);
  // };

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!currentUser) {
    return loading;
  }

  if (!currentUser || !currentUser.name) {
    return loading;
  }

  const menuItems: ItemType[] = [
    ...(menu
      ? [
          {
            key: 'center',
            icon: <UserOutlined />,
            label: '个人中心',
          },
          {
            key: 'settings',
            icon: <SettingOutlined />,
            label: '个人设置',
          },
          {
            type: 'divider' as const,
          },
        ]
      : []),
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];

  const menuHeaderDropdown = (
    <Menu className="menu" selectedKeys={[]} items={menuItems} />
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown} placement="bottomLeft">
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar className="avatar" src={currentUser.avatar || logo} alt="avatar" />
        {/* <span className={`${styles.name} anticon`}>{currentUser.name}</span> */}
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
