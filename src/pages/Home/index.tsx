import './index.less';

// import { Card } from 'antd';
import React, { useEffect } from 'react';

import BannerImg from '@/assets/img/banner1.png';
import useStore from '@/store';

import BannerCom from './CustomCom/BannerCom';

const imgList = [
  { url: BannerImg },
  {
    url: BannerImg,
  },
];

const Home: React.FC = () => {
  useEffect(() => {}, []);
  const store = useStore();
  console.log('store', store);
  const fun = () => {
    console.log('搜索');
  };

  return (
    <div
      className="work-home"
      onClick={() => {
        fun();
      }}>
      <BannerCom imgList={imgList} />
    </div>
  );
};
export default Home;
