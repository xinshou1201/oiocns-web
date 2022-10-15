import {
  AppstoreFilled,
  DatabaseFilled,
  FileTextFilled,
  FundFilled,
  HomeOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

import cls from './index.module.less';
import StoreClassifyTree from './Tree';

const StoreClassify = () => {
  const items = [
    { label: '应用', key: 'app', icon: <AppstoreFilled /> }, // 菜单项务必填写 key
    { label: '文档', key: 'doc', icon: <FileTextFilled /> },
    { label: '数据', key: 'data', icon: <FundFilled /> },
    { label: '资源', key: 'src', icon: <DatabaseFilled /> },
  ];
  return (
    <div className={cls.container}>
      <div className={cls.top}>
        <div className={cls.title}>
          <HomeOutlined />
          <strong>市场</strong>
        </div>
      </div>
      <div>
        <div className={cls.subTitle}>常用分类</div>
        <Menu items={items} />
        <StoreClassifyTree></StoreClassifyTree>
      </div>
    </div>
  );
};

export default StoreClassify;
