import {
  DatabaseOutlined,
  FileTextOutlined,
  FundOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

import cls from './index.module.less';

/**
 * 待办页面菜单
 * @returns
 */
const TodoMenu = () => {
  const history = useHistory();

  /* 待办页面菜单 */
  const items = [
    { label: '好友申请', key: 'friend', icon: <UserOutlined /> },
    { label: '单位审核', key: 'org', icon: <FileTextOutlined /> },
    { label: '商店审核', key: 'store', icon: <FundOutlined /> },
    { label: '订单审核', key: 'order', icon: <DatabaseOutlined /> },
  ];

  /* 应用待办 */
  // TODO 获取应用待办
  const apps = [
    { label: '公益仓', key: 'gyc', icon: <HomeOutlined /> },
    { label: '办公OA', key: 'oa', icon: <FileTextOutlined /> },
    { label: '资产管理', key: 'asset', icon: <FundOutlined /> },
    { label: '资产监控', key: 'monitor', icon: <DatabaseOutlined /> },
  ];

  // 菜单跳转
  const to = (e: any) => {
    history.push(`/todo/${e.key}`);
  };

  return (
    <div className={cls.container}>
      <div className={cls.top}>
        <div className={cls.title}>
          <HomeOutlined />
          <strong>办事</strong>
        </div>
      </div>
      <div>
        <div className={cls.subTitle}>平台待办</div>
        <Menu items={items} onClick={to} />
      </div>
      <div>
        <div className={cls.subTitle}>应用待办</div>
        <Menu items={apps} />
      </div>
    </div>
  );
};

export default TodoMenu;
