import { Card, Tabs } from 'antd';
import React, { useMemo, useState } from 'react';
import AppShowComp from '@/bizcomponents/AppTablePage';
import MarketService from '@/module/appstore/market';

const service = new MarketService({
  spaceName: 'publicStore',
  searchApi: 'appstore.merchandise',
  createApi: 'appstore.create',
  deleteApi: 'appstore.marketDel',
  updateApi: 'appstore.updateMarket',
});

import StoreRecent from '../Recent';

const StoreApp: React.FC = () => {
  const [apiName, setApiName] = useState('merchandise');
  const recent = <StoreRecent></StoreRecent>;

  const renderTable = useMemo(() => {
    return <AppShowComp service={service} />;
  }, [apiName]);
  return (
    <div>
      <div>{recent}</div>
      <Card>
        <Tabs
          defaultActiveKey="1"
          onChange={(key: string) => {
            setApiName(key);
          }}
          items={[
            {
              label: `全部`,
              key: '1',
            },
            {
              label: `创建的`,
              key: '2',
            },
            {
              label: `购买的`,
              key: '3',
            },
            {
              label: `共享的`,
              key: '4',
            },
            {
              label: `分配的`,
              key: '5',
            },
          ]}
        />
      </Card>
      <div className="page-content-table">{renderTable}</div>
    </div>
  );
};

export default StoreApp;
