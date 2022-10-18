import { Layout } from 'antd';
import React from 'react';

// import useStore from '@/store';
import styles from './index.module.less';
import OrganizationalUnits from '@/components/OgnazitionUnit';
import RightContent from './RightContent';

const { Header } = Layout;

const customHeader: React.FC = () => {
  return (
    <Header className={styles[`layout-header`]}>
      <OrganizationalUnits />
      <RightContent />
    </Header>
  );
};

export default customHeader;
