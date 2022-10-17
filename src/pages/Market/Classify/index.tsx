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
import MarketClassifyTree from './Tree';

const MarketClassify = ({ history }: any) => {
  const items = [
    {
      label: '开放市场',
      key: 'openMarket',
      icon: <AppstoreFilled />,
      children: [
        {
          label: '应用市场',
          key: '/market/app',
          icon: <AppstoreFilled />,
        }, // 菜单项务必填写 key
        {
          label: '文档共享库',
          key: '/market/docx',
          icon: <FileTextFilled />,
        },
        { label: '数据市场', key: '/data', icon: <FundFilled /> },
        { label: '公益仓', key: '/src', icon: <DatabaseFilled /> },
      ],
    },
  ];

  const handleChange = (path: string) => {
    history.push(path);
  };
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
        <Menu
          mode="inline"
          items={items}
          defaultOpenKeys={['openMarket']}
          onClick={({ key }) => handleChange(key)}
        />
        <MarketClassifyTree></MarketClassifyTree>
      </div>
    </div>
  );
};

export default MarketClassify;
