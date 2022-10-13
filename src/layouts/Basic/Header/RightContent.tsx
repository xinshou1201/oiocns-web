// import { QuestionCircleOutlined } from '@ant-design/icons';

import { Space } from 'antd';
import React from 'react';

// import { useHistory } from 'react-router-dom';
import Avatar from './AvatarDropdown';
import styles from './index.module.less';

// export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  // const history = useHistory();

  //   const { navTheme, layout } = initialState.settings;

  //   if ((navTheme === 'realDark' && layout === 'top') || layout === 'mix') {
  //     className = `${styles.right}  ${styles.dark}`;
  //   }
  // const handleAction = (path: string) => {
  //   history.replace(path);
  // };
  return (
    <Space className={styles.right}>
      <span className={styles.action}>消息</span>
      <span className={styles.action}>待办</span>
      <span className={styles.action}>设置</span>
      <span className={styles.action}>仓库</span>
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
