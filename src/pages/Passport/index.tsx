import React from 'react';

import type { IRouteConfig } from '@/routes/config';

import cls from './index.module.less';

const Passport: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  console.log(route);
  return <div className={cls.contaner}></div>;
};
export default Passport;
