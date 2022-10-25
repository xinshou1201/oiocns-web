import './index.less';

import React from 'react';

import AppShowComp from '@/bizcomponents/AppTablePage';
interface indexType {
  props: []; //props
}
const Index: React.FC<indexType> = ({ props }) => {
  console.log('打印index', props);

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
