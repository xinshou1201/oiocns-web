import React, { useEffect, useState } from 'react';
import './index.less';

import CardOrTable from '@/components/CardOrTableComp';
import AppCard from '@/components/AppCardComp';
import { columns } from '@/components/CardOrTableComp/config';
import MarketService from '@/module/appstore/market';

const MarketApp = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    getList();
  }, []);

  async function getList() {
    const params = {
      offset: 0,
      limit: 10,
      filter: '',
    };
    await MarketService.getMarketList(params);

    setList([...MarketService.marketList]);
  }
  const renderCardFun = (dataArr: any) => {
    return dataArr.map((item: any) => {
      return <AppCard className="card" data={item} key={item.id} />;
    });
  };
  console.log('6666', list);

  return (
    <div className="app-wrap">
      <CardOrTable
        dataSource={list}
        total={50}
        renderCardContent={renderCardFun}
        columns={columns as any}
        rowKey={'id'}
      />
    </div>
  );
};

export default MarketApp;
