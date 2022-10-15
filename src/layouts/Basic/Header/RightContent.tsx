import React from 'react';
import { Space } from 'antd';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import { IconFont } from '@/components/IconFont';
import { IRouteConfig } from '@/routes/config';

import Avatar from './AvatarDropdown';
import styles from './index.module.less';

const GlobalHeaderRight: React.FC<RouteComponentProps> = (props) => {
  const routes = [
    {
      path: '/org/home',
      title: '首页',
      icon: 'HomeFilled',
    },
    {
      path: '/org/chat',
      title: '聊天',
      icon: 'icon-message',
    },
    {
      path: '/org/market',
      title: '待办',
      icon: 'icon-todo',
    },
    {
      path: '/org/store',
      title: '仓库',
      icon: 'icon-store',
    },
    {
      path: '/org/setting',
      title: '设置',
      icon: 'icon-setting',
    },
  ];
  const { location, history } = props;
  return (
    <Space className={styles.right}>
      {routes && routes.length > 0
        ? routes?.map((item: IRouteConfig) => {
            return (
              <Link
                to={item.path}
                className={`${styles.action} ${
                  item.path.match(location.pathname) ? `${styles.active}` : ''
                }`}
                key={item.path}>
                {item?.icon ? (
                  <IconFont type={item?.icon} className={`${styles[`action-icon`]}`} />
                ) : (
                  item?.title
                )}
              </Link>
            );
          })
        : ''}
      <Avatar history={history} />
    </Space>
  );
};
export default withRouter(GlobalHeaderRight);
