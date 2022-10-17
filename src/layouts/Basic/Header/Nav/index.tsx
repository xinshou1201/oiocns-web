import { Space } from 'antd';
import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import { IconFont } from '@/components/IconFont';

import cls from './index.module.less';

/**
 * 顶部导航
 * @param
 * @returns
 */
const HeaderNav: React.FC<RouteComponentProps> = () => {
  const navs = [
    {
      path: '/chat',
      title: '聊天',
      icon: 'icon-message',
    },
    {
      path: '/todo',
      title: '待办',
      icon: 'icon-todo',
    },
    {
      path: '/market/app',
      title: '市场',
      icon: 'icon-store',
    },
    {
      path: '/store',
      title: '仓库',
      icon: 'icon-store',
    },
    {
      path: '/setting',
      title: '设置',
      icon: 'icon-setting',
    },
  ];
  return (
    <div className={cls['header-nav-container']}>
      <Space size={36}>
        {navs.map((item) => {
          return (
            <Link
              key={item.path}
              to={item.path}
              title={item.title}
              className={cls['header-nav-link']}>
              {typeof item.icon !== 'string' ? (
                item.icon
              ) : (
                <IconFont
                  type={item.icon}
                  className={`${
                    location.pathname.includes(item.path) ? `${cls.active}` : ''
                  }`}
                />
              )}
            </Link>
          );
        })}
      </Space>
    </div>
  );
};
export default withRouter(HeaderNav);
