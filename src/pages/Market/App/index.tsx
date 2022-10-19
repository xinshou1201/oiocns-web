import './index.less';

import React from 'react';

import CardOrTable from '@/components/CardOrTableComp';
import { columns, data } from '@/components/CardOrTableComp/config';

const MarketApp = () => {
  return (
    <div className="app-wrap">
      <div className="red-box">
        <h1>测试区域</h1>
      </div>
      <CardOrTable
        dataSource={data}
        total={50}
        cardContent={<p>卡片展示区域</p>}
        columns={columns}
      />
    </div>
  );
};

export default MarketApp;
