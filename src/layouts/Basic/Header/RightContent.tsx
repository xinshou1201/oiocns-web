import { Space } from 'antd';
import React, { useContext } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import { IconFont } from '@/components/IconFont';
import { IRouteConfig } from '@/routes/config';

import { layoutRoutes } from '..';
import Avatar from './AvatarDropdown';
import styles from './index.module.less';

const GlobalHeaderRight: React.FC<RouteComponentProps> = (props) => {
  const routes = useContext(layoutRoutes);
  const { location } = props;
  // routes?.forEach((n) => console.log(n.path.match(location.pathname)));
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
      <Avatar />
    </Space>
  );
};
export default withRouter(GlobalHeaderRight);
