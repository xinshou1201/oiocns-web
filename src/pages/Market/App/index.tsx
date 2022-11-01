import cls from './index.module.less';

import React from 'react';

import AppShowComp from '@/bizcomponents/AppTableWithBuy';
import MarketService from '@/module/appstore/market';

const service = new MarketService({
  spaceName: 'publicStore',
  searchApi: 'appstore.merchandise',
  createApi: 'appstore.create',
  deleteApi: 'appstore.marketDel',
  updateApi: 'appstore.updateMarket',
});

const Index: React.FC = () => {
  return (
    <>
      <AppShowComp className={cls['market-public-wrap']} service={service} />
    </>
  );
};

export default Index;
