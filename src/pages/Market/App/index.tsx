import './index.less';

import React from 'react';

import AppShowComp from '@/bizcomponents/AppTablePage';
const Index: React.FC = () => {
  return (
    <>
      <AppShowComp
        apiName={'merchandise'}
        defalutKeys={{
          listKey: 'publicStoreList',
          totalKey: 'publicStoreTotal',
        }}
      />
    </>
  );
};

export default Index;
