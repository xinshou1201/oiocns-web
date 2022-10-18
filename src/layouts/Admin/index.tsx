import React from 'react';
import { Layout } from 'antd';
import ContentBreadcrumb from './ContentBreadcrumb';
import AdminMenu from './AdminMenu';

const { Content } = Layout;

type AdminLayoutProps = {
  hideBreadcrumb?: boolean;
  breadcrumb?: () => any;
  menuBottomRender?: () => any;
  location: any;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({
  hideBreadcrumb,
  menuBottomRender = '',
  location,
}) => {
  return (
    <Layout>
      <AdminMenu bottomMenu={menuBottomRender} location={location}></AdminMenu>
      <Layout className="page-container">
        {!hideBreadcrumb && <ContentBreadcrumb></ContentBreadcrumb>}

        <Content className="page-content"></Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
