import { Layout, Menu, Space } from 'antd';
import type { MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { businessRouteList } from '@/routes/utils';

import { IconFont } from '../IconFont';
import cls from './index.module.less';
import { ItemType } from 'rc-menu/lib/interface';
const { Sider } = Layout;

type ContentMenuProps = {
  children?: any;
  location: any;
  data?: MenuProps[`items`];
  menuClick?: MenuProps[`onClick`];
};
interface MemuItemType {
  children?: MemuItemType[];
  fathKey?: string;
  key?: string;
  [key: string]: any;
}
/**检查当前路由是否是子路由，如果有则显示当前级菜单 */
const checkRoute = (currentPath: string, routeMenu: MemuItemType[]) => {
  const current = routeMenu.find((n: any) => n.key === currentPath);
  if (!current) return null;
  const currentMenu = routeMenu.filter((n: any) => {
    if (n.key) {
      return current.fathKey === n.key;
    } else if (n.type) {
      return current.fathKey === n.type;
    }
  });
  return currentMenu.length > 1 ? currentMenu : currentMenu[0].children;
};

/** 生成有fathKey为类别的菜单*/
const flatMenuData = (
  menuData: ItemType[] | any,
  fathKey: string = 'group',
): MemuItemType[] => {
  const data = [];
  for (let index = 0; index < menuData.length; index++) {
    const element = menuData[index];
    data.push({ ...element, fathKey });
    if (element?.children) {
      data.push(...flatMenuData(element.children, element.key || element.type));
    }
  }
  return data;
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
  const { data: menuData } = props;
  const [currentMenuData, setCurrentMenuData] = useState<ItemType[] | MemuItemType[]>(
    menuData || [],
  );
  const [activeMenu, setActiveMenu] = useState<string>(location.pathname);
  const currentMacthRoute = businessRouteList.find(
    (child) => child.path === props.match.path,
  );
  const menuFlat = menuData ? flatMenuData(menuData) : [];
  useEffect(() => {
    setActiveMenu(location.pathname);
    const current = checkRoute(location.pathname, menuFlat);
    setCurrentMenuData(current || menuData || []);
  }, [location.pathname]);

  const menuOnChange: MenuProps[`onClick`] = (e) => {
    setActiveMenu(e.key);
    if (props.menuClick) {
      props.menuClick?.call(this, e);
    } else {
      props.history.push(e.key);
    }
  };
  // 点击submenu
  const handleChange: MenuProps[`onOpenChange`] = (paths) => {
    const current = menuFlat.find((n) => n && n?.key && n?.key === paths[0]);
    if (current && current.children && current.children.length > 0) {
      const nextRoute = current.children[0];
      if (nextRoute && nextRoute?.key) {
        props.history.push(nextRoute?.key);
      }
    }
  };

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
        <Menu
          // mode="inline"
          items={currentMenuData as MenuProps[`items`]}
          onClick={menuOnChange}
          onOpenChange={handleChange}
          triggerSubMenuAction="click"
          selectedKeys={[activeMenu]}
          openKeys={[]}
          defaultSelectedKeys={[activeMenu]}></Menu>
      )}
      {props.children}
    </Sider>
  );
};

export default withRouter(ContentMenu);
