import React from 'react';

import BasicLayout from '@/layouts/Basic';
import PassportLayout from '@/layouts/Passport';
import PassportForget from '@/pages/Passport/Forget';
import PassportLock from '@/pages/Passport/Lock';
import PassportLogin from '@/pages/Passport/Login';
import PassportRegister from '@/pages/Passport/Register';
import Redirect from '@/pages/Redirect';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
import { HomeFilled } from '@ant-design/icons';

export interface IRouteConfig {
  // 路由路径
  path: string;
  // 路由组件
  component?: any;
  // 302 跳转
  redirect?: string;
  exact?: boolean;
  // 路由信息
  title: string;
  meta?: any;
  icon?: string | AntdIconProps;
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean;
  routes?: IRouteConfig[];
}

/* 通行证 */
const PassportRouter: IRouteConfig[] = [
  {
    path: '/passport/login',
    component: PassportLogin,
    title: '登录',
  },
  {
    path: '/passport/register',
    component: PassportRegister,
    title: '注册',
  },
  {
    path: '/passport/lock',
    component: PassportLock,
    title: '锁屏',
  },
  {
    path: '/passport/forget',
    component: PassportForget,
    title: '忘记密码',
  },
];

/* 首页 */
const HomeRouter: IRouteConfig[] = [
  {
    path: '/home',
    title: '首页',
    icon: <HomeFilled />,
    component: React.lazy(() => import('@/pages/Home')),
  },
];

/* 沟通 */
const ChatRouter: IRouteConfig[] = [
  {
    path: '/chat',
    title: '沟通',
    icon: 'HomeFilled',
    component: React.lazy(() => import('@/pages/Chat')),
  },
];

/* 办事 */
const TodoRouter: IRouteConfig[] = [
  {
    path: '/todo',
    title: '办事',
    icon: 'HomeFilled',
    component: React.lazy(() => import('@/pages/Todo')),
  },
];

/* 仓库 */
const StoreRouter: IRouteConfig[] = [
  {
    path: '/store',
    title: '仓库',
    icon: 'HomeFilled',
    component: React.lazy(() => import('@/pages/Store')),
  },
];

/* 市场 */
const MarketRouter: IRouteConfig[] = [
  {
    path: '/market',
    component: React.lazy(() => import('@/pages/Market')),
    title: '市场',
    redirect: '/market/app',
    routes: [
      {
        path: '/market/app',
        title: '应用市场',
        icon: 'icon-message',
        component: React.lazy(() => import('@/pages/Market/App')),
      },
      {
        path: '/market/docx',
        title: '文档市场',
        icon: 'icon-message',
        component: React.lazy(() => import('@/pages/Market/Docx')),
      },
    ],
  },
];

/* 设置 */
const SettingRouter: IRouteConfig[] = [
  {
    path: '/setting',
    title: '设置',
    icon: 'HomeFilled',
    component: React.lazy(() => import('@/pages/Setting')),
  },
];

/* 个人 */
const PersonRouter: IRouteConfig[] = [
  {
    path: '/person',
    title: '个人',
    icon: 'HomeFilled',
    component: React.lazy(() => import('@/pages/Person')),
    routes: [
      {
        path: '/person/info',
        title: '个人信息',
        icon: 'icon-setting',
        component: React.lazy(() => import('@/pages/Person/Info')),
      },
      {
        path: '/person/passport',
        title: '通行设置',
        icon: 'icon-setting',
        component: React.lazy(() => import('@/pages/Person/Passport')),
      },
      {
        path: '/person/wallet',
        title: '卡包设置',
        icon: 'icon-setting',
        component: React.lazy(() => import('@/pages/Person/Info')),
      },
      {
        path: '/person/homeset',
        title: '首页设置',
        icon: 'icon-setting',
        component: React.lazy(() => import('@/pages/Person/Info')),
      },
      {
        path: '/person/help',
        title: '帮助中心',
        icon: 'icon-setting',
        component: React.lazy(() => import('@/pages/Person/Info')),
      },
    ],
  },
];

// 路由汇总
const Routers: IRouteConfig[] = [
  {
    path: '/',
    title: '/',
    exact: true,
    component: Redirect,
  },
  {
    path: '/passport',
    component: PassportLayout,
    title: '通行证',
    redirect: '/passport/login',
    routes: [...PassportRouter],
  },
  {
    path: '/',
    component: BasicLayout,
    title: '通用',
    routes: [
      ...HomeRouter,
      ...ChatRouter,
      ...TodoRouter,
      ...StoreRouter,
      ...MarketRouter,
      ...SettingRouter,
      ...PersonRouter,
    ],
  },
  {
    path: '/noFond',
    title: '页面不存在',
    component: React.lazy(() => import('@/pages/NoFond')),
  },
];

export default Routers;
