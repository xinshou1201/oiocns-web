import { Card, Tabs } from 'antd';
import React from 'react';
import AppShowComp from '@/bizcomponents/AppTablePage';

import StoreRecent from './../Recent';

const onChange = (key: string) => {
  console.log(key);
};

const StoreApp: React.FC = () => {
  const recent = <StoreRecent></StoreRecent>;
  return (
    <div>
      <div>{recent}</div>
      <Card>
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          items={[
            {
              label: `全部`,
              key: '1',
              children: `Content of Tab Pane 1`,
            },
            {
              label: `创建的`,
              key: '2',
              children: `Content of Tab Pane 2`,
            },
            {
              label: `购买的`,
              key: '3',
              children: `Content of Tab Pane 3`,
            },
            {
              label: `共享的`,
              key: '4',
              children: (
                <AppShowComp
                  apiName={'merchandise'}
                  defalutKeys={{
                    listKey: 'publicStoreList',
                    totalKey: 'publicStoreTotal',
                  }}
                />
              ),
            },
            {
              label: `分配的`,
              key: '5',
              children: `Content of Tab Pane 3`,
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default StoreApp;
