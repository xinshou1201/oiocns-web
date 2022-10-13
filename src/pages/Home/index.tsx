import './index.less';

// import { Card } from 'antd';
import React, { useEffect } from 'react';

import BannerImg from '@/assets/imgs/banner1.png';
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

  return (
    <div className="work-home">
      <BannerCom imgList={imgList} />
    </div>
  );
};
export default Home;
