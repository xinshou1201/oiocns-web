import './index.less';

import { Card } from 'antd';
import React from 'react';

import CardOrTable from '@/components/CardOrTableComp';
import { columns, data } from '@/components/CardOrTableComp/config';

const MarketApp = () => {
  const renderCardFun = (data: any) => {
    console.log(data);

    return data.map((item: any) => {
      return (
        <div className="card" key={item.key}>
          <Card title={item.name} bordered={false} style={{ width: 300 }}>
            <p>{item.name}</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      );
    });
  };

  return (
    <div className="app-wrap">
      <div className="red-box">
        <h1>测试区域</h1>
      </div>
      <CardOrTable
        dataSource={data}
        total={50}
        renderCardContent={renderCardFun}
        columns={columns}
      />
    </div>
  );
};

export default MarketApp;
