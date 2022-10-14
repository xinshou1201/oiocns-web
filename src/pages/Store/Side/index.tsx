import { Menu } from 'antd';
import React from 'react';

const StoreSide = () => {
  const items = [
    { label: '应用', key: 'app' }, // 菜单项务必填写 key
    { label: '文档', key: 'doc' },
    { label: '数据', key: 'data' },
    { label: '资源', key: 'src' },
  ];
  return <Menu items={items} />;
};

export default StoreSide;
