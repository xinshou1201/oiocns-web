// import { QuestionCircleOutlined } from '@ant-design/icons';

import { Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { IRouteConfig } from '@/routes/config';

// import { useHistory } from 'react-router-dom';
import Avatar from './AvatarDropdown';
import styles from './index.module.less';

const GlobalHeaderRight: React.FC<{ routes?: IRouteConfig[] }> = (props) => {
  const { routes } = props;
  return (
    <Space className={styles.right}>
      {routes?.map((item: IRouteConfig) => {
        return (
          <Link to={item.path} className={styles.action} key={item.path}>
            {item.title}
            {/* {route?.icon &&
                React.createElement(Icon[route.icon], {
                  style: { fontSize: 16 },
                })} */}
          </Link>
        );
      })}

      {/* <span className={styles.action}>消息</span>
      <span className={styles.action}>待办</span>
      <span className={styles.action}>设置</span>
      <span className={styles.action}>仓库</span> */}
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
