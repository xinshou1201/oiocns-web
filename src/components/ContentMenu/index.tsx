import { Layout, Menu, Space, MenuProps } from 'antd';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { businessRouteList } from '@/routes/utils';

import { IconFont } from '../IconFont';
import cls from './index.module.less';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
const { Sider } = Layout;

type ContentMenuProps = {
  children?: any;
  location: any;
  data?: MenuProps[`items`];
  menuClick?: MenuClickEventHandler;
};

// 根据数据类型渲染icon
const createIcon = (icon?: string | React.Component | React.ReactNode) => {
  return typeof icon == 'string' ? (
    <IconFont type={(icon as string) || ''} className={cls['icon']} />
  ) : (
    <span className={cls['icon']}>{icon as React.ReactNode}</span> || ''
  );
};

const ContentMenu: React.FC<RouteComponentProps & ContentMenuProps> = (props) => {
  const currentMacthRoute = businessRouteList.find(
    (child) => child.path === props.match.path,
  );
  return (
    <Sider className={cls.sider} width={220}>
      {currentMacthRoute && (
        <div className={cls.title}>
          <Space>
            <>{createIcon(currentMacthRoute?.icon)}</>
            <div>
              <strong>{currentMacthRoute.title}</strong>
            </div>
          </Space>
        </div>
      )}
      {props.data && (
        <Menu mode="inline" items={props.data} onClick={props.menuClick}></Menu>
      )}
      {props.children}
    </Sider>
  );
};

export default withRouter(ContentMenu);
