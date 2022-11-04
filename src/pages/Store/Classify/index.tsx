import {
  AppstoreOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  FundOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

import cls from './index.module.less';
import StoreClassifyTree from '@/components/CustomTreeComp';
const items = [
  { label: '应用', key: 'app', icon: <AppstoreOutlined /> }, // 菜单项务必填写 key
  { label: '文档', key: 'doc', icon: <FileTextOutlined /> },
  { label: '数据', key: 'data', icon: <FundOutlined /> },
  { label: '资源', key: 'src', icon: <DatabaseOutlined /> },
];

const menu = ['重命名', '创建副本', '拷贝链接', '移动到', '收藏', '删除'];
const StoreClassify: React.FC = () => {
  const history = useHistory();

  //菜单跳转
  const goPage = (e: any) => {
    history.push(`/store/${e.key}`);
  };
  const handleAddShop = (item: any) => {
    console.log('handleAddShop', item);
  };
  const handleMenuClick = ({ data, key }: { data: any; key: string }) => {
    console.log('handleMenuClick', data, key);
  };

  return (
    <div className={cls.container}>
      <div>
        <div className={cls.subTitle}>常用分类</div>
        <Menu items={items} onClick={goPage} />
        <StoreClassifyTree
          menu={menu}
          searchable
          handleAddClick={handleAddShop}
          handleMenuClick={handleMenuClick}
        />
      </div>
    </div>
  );
};

export default StoreClassify;
