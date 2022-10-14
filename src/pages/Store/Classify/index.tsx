import {
  AppstoreFilled,
  DatabaseFilled,
  FileTextFilled,
  FundFilled,
  HomeOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Card, Input, Menu } from 'antd';
import React from 'react';

import StoreClassifyTree from './Tree';

const StoreClassify = () => {
  const items = [
    { label: '应用', key: 'app', icon: <AppstoreFilled /> }, // 菜单项务必填写 key
    { label: '文档', key: 'doc', icon: <FileTextFilled /> },
    { label: '数据', key: 'data', icon: <FundFilled /> },
    { label: '资源', key: 'src', icon: <DatabaseFilled /> },
  ];
  return (
    <div>
      <Card>
        <HomeOutlined />
        <strong>仓库</strong>
      </Card>
      <h3>常用分类</h3>
      <Menu items={items} />
      <h3>全部分类</h3>
      <Input prefix={<SearchOutlined />} placeholder="搜索分类" />
      <StoreClassifyTree></StoreClassifyTree>
    </div>
  );
};

export default StoreClassify;
