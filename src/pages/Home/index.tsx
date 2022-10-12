import { Card } from 'antd';
import React, { useEffect } from 'react';

import useStore from '../../store';

const Home: React.FC = () => {
  useEffect(() => {}, []);
  const store = useStore();
  console.log('store', store);

  return (
    <div>
      <h2>Home</h2>
      <Card>首页</Card>
      {/* transitionName=""和maskTransitionName=""是去除弹框动画属性 */}
    </div>
  );
};
export default Home;
