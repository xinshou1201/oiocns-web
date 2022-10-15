import React from 'react';
import { Redirect } from 'react-router-dom';

// 设置默认进入页面
const RedirectPage: React.FC = () => {
  return <Redirect to="/home" />;
};
export default RedirectPage;
