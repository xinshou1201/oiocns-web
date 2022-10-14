import './global.less';

import { ConfigProvider, Spin } from 'antd';
import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

// import Authority from '@/layouts/Authority';
import routes from '@/routes/config';

const App = () => {
  return (
    <ConfigProvider prefixCls="ogo">
      <Suspense fallback={<Spin size="large" className="layout__loading" />}>
        {/* <Authority> */}
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        {/* </Authority> */}
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
