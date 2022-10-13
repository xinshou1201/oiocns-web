import React from 'react';

import styles from './index.module.less';

const HeadImage = ({ name }: { name: string }) => {
  return <div>{name}</div>;
};
const GlobalHeaderLeft: React.FC = () => {
  return (
    <div className={styles.menu_logo}>
      <HeadImage name="杭电" />
      <h3>杭电</h3>
    </div>
  );
};
export default GlobalHeaderLeft;
