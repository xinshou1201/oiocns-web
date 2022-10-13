import './index.less';

import { Layout, Menu, Typography } from 'antd';
import { createBrowserHistory } from 'history';
import React, { useEffect, useState } from 'react';
import { matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

import routes, { IRouteConfig } from '@/routes/config';
const { Sider } = Layout;

const FilterRoutes = (arr: IRouteConfig[]): IRouteConfig[] =>
  arr.find((n) => n.path === '/org')?.routes || [];

const Header: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const sysRoutes = FilterRoutes(routes);
  const history = createBrowserHistory();

  // 路由监听
  useEffect(() => {
    const pathname = history.location.pathname;
    const match = matchRoutes(sysRoutes, pathname);
    console.log(
      '路由',
      pathname,
      match,
      match.map((n) => n.route.path),
    );

    if (match?.length) {
      setOpenKeys(match.map((n) => n.route.path));
      setSelectedKeys([match[0].route.path]);
    }
  }, [history.location.pathname]);

  return (
    <Sider className="site-layout-background">
      <div className="menu-logo">
        <Typography.Title className="logo-title" level={5}>
          {openKeys}
        </Typography.Title>
      </div>
      <Menu mode="inline" openKeys={openKeys} selectedKeys={selectedKeys}>
        {sysRoutes.map((item) => (
          <Menu.Item key={item.path}>
            <Link to={item.path}>{item.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};
export default Header;
