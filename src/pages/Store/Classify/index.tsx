import {
  AppstoreOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  FundOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import cls from './index.module.less';
import StoreClassifyTree from './Tree';

const StoreClassify: React.FC = () => {
  const history = useHistory();
  const [activeKey, setActiveKey] = useState<'app' | 'doc' | 'data' | 'src'>('app');
  const items = [
    { label: '应用', key: 'app', icon: <AppstoreOutlined /> }, // 菜单项务必填写 key
    { label: '文档', key: 'doc', icon: <FileTextOutlined /> },
    { label: '数据', key: 'data', icon: <FundOutlined /> },
    { label: '资源', key: 'src', icon: <DatabaseOutlined /> },
  ];
  const creatTree = () => {
    switch (activeKey) {
      case 'doc':
        return <StoreClassifyTree />;
    }
  };
  //菜单跳转
  const to = (e: any) => {
    setActiveKey(e.key);
    history.push(`/store/${e.key}`);
  };

  return (
    <div className={cls.container}>
      {/* <div className={cls.top}>
        <div className={cls.title}>
          <HomeOutlined />
          <strong>仓库</strong>
        </div>
      </div> */}
      <div>
        <div className={cls.subTitle}>常用分类</div>
        <Menu items={items} onClick={to} />
        {creatTree()}
      </div>
    </div>
  );
};

export default StoreClassify;
