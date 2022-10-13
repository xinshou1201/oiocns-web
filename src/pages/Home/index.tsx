import './index.less';

// import { Card } from 'antd';
import React, { useEffect } from 'react';

import BannerImg from '@/assets/img/banner1.png';
import useStore from '@/store';

import BannerCom from './components/BannerCom';

const imgList = [{ url: BannerImg }, { url: BannerImg }];

const Home: React.FC = () => {
  useEffect(() => {}, []);
  const store = useStore();
  console.log('store', store);

  return (
    <div className="work-home">
      {/* 顶部图片 */}
      <BannerCom imgList={imgList} />
      {/* 快捷入口及应用 */}
      <div className="flex"></div>
    </div>
  );
};
export default Home;
