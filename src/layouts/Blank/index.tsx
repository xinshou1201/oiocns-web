import React from 'react';
import { renderRoutes } from 'react-router-config';
const BlankLaout: React.FC<any> = (props) => {
  const { route } = props;

  console.log('搜索', route);

  return <>{renderRoutes(route.routes)}</>;
};

export default BlankLaout;
