import './global.less';

import { ConfigProvider, Spin } from 'antd';
import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import routes from '@/routes/config';

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider prefixCls="ogo">
        <Suspense fallback={<Spin size="large" className="layout__loading" />}>
          {renderRoutes(routes)}
        </Suspense>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
