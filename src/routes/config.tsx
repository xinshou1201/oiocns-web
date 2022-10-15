import React from 'react';

import BasicLayout from '@/layouts/Basic';
import PassportLayout from '@/layouts/Passport';
import PassportForget from '@/pages/Passport/Forget';
import PassportLock from '@/pages/Passport/Lock';
import PassportLogin from '@/pages/Passport/Login';
import PassportRegister from '@/pages/Passport/Register';
import Redirect from '@/pages/Redirect';

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
  icon?: string;
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean;
  routes?: IRouteConfig[];
}

// 主要业务路由
const SystemRouter: IRouteConfig[] = [
  {
    path: '/home',
    title: '首页',
    icon: 'HomeFilled',
    component: React.lazy(() => import('@/pages/Home')),
  },
  {
    path: '/market',
    component: React.lazy(() => import('@/pages/Market')),
    title: '市场',
    // exact: true,
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
    routes: [
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
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    title: '系统路由',
    // exact: true,
    routes: [
      ...SystemRouter,
      {
        path: '/org/chat',
        title: '聊天',
        icon: 'icon-message',
        component: React.lazy(() => import('@/pages/Chat')),
      },
      {
        path: '/org/market',
        title: '待办',
        icon: 'icon-todo',
        component: React.lazy(() => import('@/pages/Market')),
      },
      {
        path: '/org/store',
        title: '仓库',
        icon: 'icon-store',
        component: React.lazy(() => import('@/pages/Store')),
      },
      {
        path: '/org/setting',
        title: '设置',
        icon: 'icon-setting',
        component: React.lazy(() => import('@/pages/Setting')),
      },
    ],
  },
  {
    path: '/noFond',
    title: '页面不存在',
    component: React.lazy(() => import('@/pages/NoFond')),
  },
];

export default Routers;
