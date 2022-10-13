import { Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { IconFont } from '@/components/IconFont';
import { IRouteConfig } from '@/routes/config';

import Avatar from './AvatarDropdown';
import styles from './index.module.less';

const GlobalHeaderRight: React.FC<{ routes?: IRouteConfig[] }> = (props) => {
  const { routes } = props;
  return (
    <Space className={styles.right}>
      {routes?.map((item: IRouteConfig) => {
        return (
          <Link to={item.path} className={styles.action} key={item.path}>
            {item?.icon ? (
              <IconFont type={item?.icon} style={{ color: '#A6AEC7', fontSize: 22 }} />
            ) : (
              item?.title
            )}
          </Link>
        );
      })}
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
