import { Button, Card, Space } from 'antd';
import React, { useState } from 'react';
import API from '@/services';
import AppShowComp from '@/bizcomponents/AppTablePage';
import MarketService from '@/module/appstore/market';
import cls from './index.module.less';
import { columns } from '@/components/CardOrTableComp/config';
import { useHistory } from 'react-router-dom';

const service = new MarketService({
  nameSpace: 'publicStore',
  searchApi: API.appstore.merchandise,
  createApi: API.appstore.create,
  deleteApi: API.appstore.marketDel,
  updateApi: API.appstore.updateMarket,
});

import StoreRecent from '../Recent';

const StoreApp: React.FC = () => {
  const history = useHistory();
  const [statusKey, setStatusKey] = useState('merchandise');
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

  const test = async () => {
    let rs = await API.mock.test();
    console.log('从测试测试测试', rs);
  };
  const renderBtns = () => {
    return (
      <Space>
        <Button
          type="primary"
          onClick={() => {
            history.push('/market/app');
          }}>
          购买
        </Button>
        <Button
          onClick={() => {
            test();
          }}>
          创建
        </Button>
        <Button>暂存</Button>
      </Space>
    );
  };
  return (
    <div className={`pages-wrap flex flex-direction-col ${cls['pages-wrap']}`}>
      {<StoreRecent />}
      <Card
        title="应用"
        className={cls['app-tabs']}
        extra={renderBtns()}
        tabList={items}
        onTabChange={(key) => {
          setStatusKey(key);
          console.log('切换事件', key);
        }}
      />
      <div className={cls['page-content-table']}>
        <AppShowComp
          service={service}
          searchParams={{ status: statusKey }}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default StoreApp;
