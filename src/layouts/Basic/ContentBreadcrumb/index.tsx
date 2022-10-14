import './index.less';

import { Breadcrumb } from 'antd';
import React from 'react';
const ContentBreadcrumb: React.FC = () => {
  return (
    <div className="content-breadcrumb">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
export default ContentBreadcrumb;
