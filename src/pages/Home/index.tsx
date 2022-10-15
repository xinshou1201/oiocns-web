import './index.less';

// import { Card } from 'antd';
import React, { useEffect } from 'react';

import BannerImg from '@/assets/img/banner1.png';
import useStore from '@/store';

import BannerCom from './components/BannerCom';
import Charts from './components/Charts';
import SelfAppCom from './components/SelfAppCom';
import Shortcuts from './components/ShortcutsCom';

const imgList = [{ url: BannerImg }, { url: BannerImg }];

const Home: React.FC = () => {
  useEffect(() => {}, []);
  const store = useStore();
  console.log('storestore', store);

  return (
    <div className="work-home">
      {/* 顶部图片 */}
      <BannerCom imgList={imgList} />
      {/* 快捷入口及应用 */}
      <div className="flex">
        <Shortcuts props={[]} /> <SelfAppCom props={[]} />
      </div>
      <Charts />
    </div>
  );
};
export default Home;
