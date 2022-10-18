import React from 'react';
import { Space } from 'antd';
import * as Icon from '@ant-design/icons';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { IconFont } from '@/components/IconFont';
import { IRouteConfig } from '@/routes/config';

import Avatar from './AvatarDropdown';
import styles from './index.module.less';

// 创建icon图标元素
const iconToElement = (name: string) =>
  React.createElement(Icon && (Icon as any)[name], {
    className: styles[`action-icon`],
  });

/*渲染图标*/
const iconRender = ({ icon, title }: { icon?: string; title: string }) => {
  if (!icon) {
    return title;
  }
  return icon.indexOf('icon-') > -1 ? (
    <IconFont type={icon} className={styles[`action-icon`]} />
  ) : (
    iconToElement(icon)
  );
};
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
      {routes &&
        routes?.map((item: IRouteConfig) => {
          return (
            <Link
              to={item.path}
              key={item.path}
              className={`${styles.action} ${
                item.path.match(location.pathname) ? `${styles.active}` : ''
              }`}>
              {iconRender(item)}
            </Link>
          );
        })}
      <Avatar history={history} />
    </Space>
  );
};
export default withRouter(GlobalHeaderRight);
