import { Breadcrumb } from 'antd';
import React from 'react';

const ContentBreadcrumb: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
export default ContentBreadcrumb;
