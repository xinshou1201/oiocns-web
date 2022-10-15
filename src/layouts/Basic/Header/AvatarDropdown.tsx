import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Menu, Spin } from 'antd';
import type { ItemType } from 'antd/es/menu/hooks/useItems';
import useStore from '@/store';
import HeaderDropdown from './HeaderDropdown';
import styles from './index.module.less';

export type GlobalHeaderRightProps = {
  history?: any;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ history }) => {
  const currentUser = useStore((state) => state.user);
  // console.log('user', currentUser);
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
  const onMenuClick = (event: any) => {
    console.log(event);
    const { key } = event;
    if (key === 'logout') {
      sessionStorage.clear();
      history.push(`/passport/login`);
      return;
    }
    history.push(`${key}`);
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

  const menuItems: ItemType[] = [
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
    {
      key: '/passport/login',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];

  const menuHeaderDropdown = (
    <Menu className="menu" selectedKeys={[]} items={menuItems} onClick={onMenuClick} />
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown} placement="bottomLeft">
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar className={styles.avatar} alt="avatar">
          {currentUser.userName.substring(0, 1)}
        </Avatar>
        {/* <span className={`${styles.name} anticon`}>{currentUser.name}</span> */}
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
