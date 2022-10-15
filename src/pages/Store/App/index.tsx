import { Card, Tabs } from 'antd';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const StoreApp: React.FC = () => (
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
          children: `Content of Tab Pane 3`,
        },
        {
          label: `分配的`,
          key: '5',
          children: `Content of Tab Pane 3`,
        },
      ]}
    />
  </Card>
);

export default StoreApp;
