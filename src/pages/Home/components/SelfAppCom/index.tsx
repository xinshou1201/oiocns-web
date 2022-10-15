import './index.less';

import React from 'react';

const dataSource = [
  {
    title: 'OCR',
    url: 'https://gw.alipayobjects.com/zos/bmw-prod/ae0adacf-9456-4ed3-b1ab-51e4417d8d0c.svg',
    desc: '这是一段',
    key: 1,
  },
  {
    title: 'OGO',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
    desc: '算法的说明',
    key: 4,
  },
];
import CardWidthTitle from '@/components/CardWidthTitle';
interface SelfAppComType {
  props: []; //入口列表
}
const BannerCom: React.FC<SelfAppComType> = () => {
  return (
    <CardWidthTitle className="self-app" title={'我的应用'}>
      <div className="app-content">
        {dataSource.map((item) => {
          return <AppCard className="app-wrap" key={item.key} info={item} />;
        })}
      </div>
    </CardWidthTitle>
  );
};
const AppCard: any = ({ className, info }: { className: string; info: any }) => {
  return (
    <div className={`${className} app-box`}>
      <img className="app-box-img" src={info.url} alt="" />
      <div className="app-info">
        <span className="app-info-name">{info.title || '资产监管平台'}</span>
        <span className="app-info-desc">{info.desc || '描述文字'}</span>
      </div>
    </div>
  );
};
export default BannerCom;
