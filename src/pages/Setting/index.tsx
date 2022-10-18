import React from 'react';
import { renderRoutes } from 'react-router-config';

import BreadCrumb from '@/components/BreadCrumb';
import ContentTemplate from '@/components/ContentTemplate';
import { IRouteConfig } from '@/routes/config';

import SettingMenu from './Menu';

const Setting: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  const sider = <SettingMenu></SettingMenu>;
  const contentTopLeft = <BreadCrumb></BreadCrumb>;
  const content = <div>{renderRoutes(route.routes)}</div>;
  return (
    <ContentTemplate sider={sider} contentTopLeft={contentTopLeft} content={content} />
  );
};

export default Setting;
