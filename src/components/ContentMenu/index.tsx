import { Layout, Space } from 'antd';
import React, { ReactNode } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { businessRouteList } from '@/routes/utils';

import { IconFont } from '../IconFont';
import cls from './index.module.less';
const { Sider } = Layout;

type ContentMenuProps = {
  children?: any;
  location: any;
};

// 根据数据类型渲染icon
const createIcon = (icon?: string | React.Component | ReactNode) => {
  return typeof icon == 'string' ? (
    <IconFont type={(icon as string) || ''} className={cls['icon']} />
  ) : (
    <span className={cls['icon']}>{icon as ReactNode}</span> || ''
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
      {props.children}
    </Sider>
  );
};

export default withRouter(ContentMenu);
