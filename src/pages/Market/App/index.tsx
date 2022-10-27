import './index.less';

import React from 'react';

import AppShowComp from '@/bizcomponents/AppTablePage';
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
      <AppShowComp service={service} />
    </>
  );
};

export default Index;
