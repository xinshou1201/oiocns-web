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

const layouts: IRouteConfig[] = [
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
    path: '/org',
    component: BasicLayout,
    title: '系统路由',
    // exact: true,
    routes: [
      {
        path: '/org/home',
        title: '首页',
        icon: 'home',
        component: React.lazy(() => import('@/pages/Home')),
      },
      {
        path: '/org/app',
        title: 'APP',
        icon: 'home',
        component: React.lazy(() => import('@/pages/App')),
      },
      {
        path: '/org/chat',
        title: '聊天',
        icon: 'home',
        component: React.lazy(() => import('@/pages/Chat')),
      },
      {
        path: '/org/market',
        title: 'market',
        icon: 'home',
        component: React.lazy(() => import('@/pages/Market')),
      },
      {
        path: '/org/store',
        title: 'cangku',
        icon: 'home',
        component: React.lazy(() => import('@/pages/Store')),
      },
    ],
  },
  {
    path: '/noFond',
    title: '页面不存在',
    component: React.lazy(() => import('@/pages/NoFond')),
  },
];

export default layouts;
