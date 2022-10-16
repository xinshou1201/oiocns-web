import { Layout, Space } from 'antd';
import React from 'react';

import cls from './index.module.less';
import OrganizationalUnits from '@/components/OgnazitionUnit';
import HeaderNav from './Nav';
import UserAvatar from './UserAvatar';
import HeaderHome from './Home';

const { Header } = Layout;

const BasicHeader: React.FC = () => {
  return (
    <Header className={cls[`basic-header`]}>
      <OrganizationalUnits />
      <Space size={36}>
        <HeaderHome />
        <HeaderNav />
        <UserAvatar></UserAvatar>
      </Space>
    </Header>
  );
};

export default BasicHeader;
