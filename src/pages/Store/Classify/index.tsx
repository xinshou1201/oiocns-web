import {
  AppstoreOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  FundOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

import cls from './index.module.less';
import StoreClassifyTree from './Tree';

const StoreClassify: React.FC = () => {
  const history = useHistory();

  const items = [
    { label: '应用', key: 'app', icon: <AppstoreOutlined /> }, // 菜单项务必填写 key
    { label: '文档', key: 'doc', icon: <FileTextOutlined /> },
    { label: '数据', key: 'data', icon: <FundOutlined /> },
    { label: '资源', key: 'src', icon: <DatabaseOutlined /> },
  ];

  //菜单跳转
  const to = (e: any) => {
    history.push(`/store/${e.key}`);
  };

  return (
    <div className={cls.container}>
      <div className={cls.top}>
        <div className={cls.title}>
          <HomeOutlined />
          <strong>仓库</strong>
        </div>
      </div>
      <div>
        <div className={cls.subTitle}>常用分类</div>
        <Menu items={items} onClick={to} />
        <StoreClassifyTree></StoreClassifyTree>
      </div>
    </div>
  );
};

export default StoreClassify;
