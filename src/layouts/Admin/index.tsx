import React from 'react';
import { Layout } from 'antd';
import ContentBreadcrumb from './ContentBreadcrumb';

const { Content } = Layout;

type AdminLayoutProps = {
  hideBreadcrumb?: boolean;
  breadcrumb?: () => any;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ hideBreadcrumb }) => {
  return (
    <Layout>
      {/* <AdminMenu> */}
      <Layout className="page-container">
        {!hideBreadcrumb && <ContentBreadcrumb></ContentBreadcrumb>}

        <Content className="page-content"></Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
