import React from 'react';
import './index.less';

import CardOrTable from '@/components/CardOrTableComp';
import AppCard from '@/components/AppCardComp';
import { columns, data } from '@/components/CardOrTableComp/config';

const MarketApp = () => {
  const renderCardFun = (data: any) => {
    return data.map((item: any) => {
      return <AppCard className="card" data={item} key={item.key} />;
    });
  };

  return (
    <div className="app-wrap">
      <CardOrTable
        dataSource={data}
        total={50}
        renderCardContent={renderCardFun}
        defaultPageType="card"
        columns={columns as any}
        rowKey={'key'}
      />
    </div>
  );
};

export default MarketApp;
