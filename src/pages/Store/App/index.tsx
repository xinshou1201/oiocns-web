import { Button, Card, Space } from 'antd';
import React, { useMemo, useState } from 'react';
import AppShowComp from '@/bizcomponents/AppTablePage';
import MarketService from '@/module/appstore/market';
import cls from './index.module.less';

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
  const items = [
    {
      tab: `全部`,
      key: '1',
    },
    {
      tab: `创建的`,
      key: '2',
    },
    {
      tab: `购买的`,
      key: '3',
    },
    {
      tab: `共享的`,
      key: '4',
    },
    {
      tab: `分配的`,
      key: '5',
    },
  ];
  const renderBtns = () => {
    return (
      <Space>
        <Button type="primary" onClick={() => {}}>
          购买
        </Button>
        <Button>创建</Button>
        <Button>暂存</Button>
      </Space>
    );
  };
  const renderTable = useMemo(() => {
    return <AppShowComp service={service} />;
  }, [apiName]);
  return (
    <div className={`pages-wrap flex flex-direction-col ${cls['pages-wrap']}`}>
      {<StoreRecent />}
      <Card
        title="应用"
        className={cls['app-tabs']}
        extra={renderBtns()}
        tabList={items}
        onTabChange={(key) => {
          setApiName(key);
        }}
      />
      <div className={cls['page-content-table']}>{renderTable}</div>
    </div>
  );
};

export default StoreApp;
