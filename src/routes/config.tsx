import {
  ApartmentOutlined,
  AppstoreOutlined,
  AuditOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  ForkOutlined,
  FundOutlined,
  GiftOutlined,
  GlobalOutlined,
  HomeFilled,
  HomeOutlined,
  IdcardOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  SafetyOutlined,
  SettingOutlined,
  ShopOutlined,
  SmileOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UserOutlined,
  VerifiedOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import React from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect as RouterRedirect } from 'react-router-dom';

import BasicLayout from '@/layouts/Basic';
import PassportLayout from '@/layouts/Passport';
import PassportForget from '@/pages/Passport/Forget';
import PassportLock from '@/pages/Passport/Lock';
import PassportLogin from '@/pages/Passport/Login';
import PassportRegister from '@/pages/Passport/Register';
import Redirect from '@/pages/Redirect';

export interface IRouteConfig extends RouteConfig {
  // 路由路径
  path: string;
  // 路由组件
  component?: any;
  // 302 跳转
  redirect?: string;
  exact?: boolean;
  // 路由信息
  title: string;
  // 元数据
  meta?: any;
  // 图标
  icon?: string | React.ReactNode;
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean;
  // 子路由
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
    icon: 'icon-message',
    component: React.lazy(() => import('@/pages/Chat')),
  },
];

/* 办事 */
const TodoRouter: IRouteConfig[] = [
  {
    path: '/todo',
    title: '办事',
    icon: 'icon-todo',
    component: React.lazy(() => import('@/pages/Todo')),
    routes: [
      {
        path: '/todo/friend',
        title: '好友申请',
        icon: <UserOutlined />,
        component: React.lazy(() => import('@/pages/Todo/Friend')),
      },
      {
        path: '/todo/org',
        title: '单位审核',
        icon: <AuditOutlined />,
        component: React.lazy(() => import('@/pages/Todo/Org')),
      },
      {
        path: '/todo/store',
        title: '商店审核',
        icon: <ShopOutlined />,
        component: React.lazy(() => import('@/pages/Todo/Store')),
        routes: [
          {
            path: '/todo/store/app',
            title: '应用上架',
            icon: <ShopOutlined />,
            component: React.lazy(() => import('@/pages/Todo/Store')),
          },
          {
            path: '/todo/store/market',
            title: '加入市场',
            icon: <ShopOutlined />,
            component: React.lazy(() => import('@/pages/Todo/Store')),
          },
        ],
      },

      {
        path: '/todo/order',
        title: '订单审核',
        icon: <UnorderedListOutlined />,
        component: React.lazy(() => import('@/pages/Todo/Order')),
      },
      {
        path: '/todo',
        title: '办事',
        render: () => <RouterRedirect to="/todo/friend" />,
      },
    ],
  },
];

/* 仓库 */
const StoreRouter: IRouteConfig[] = [
  {
    path: '/store',
    title: '仓库',
    icon: 'icon-store',
    component: React.lazy(() => import('@/pages/Store')),
    routes: [
      {
        path: '/store/app',
        title: '应用',
        icon: <AppstoreOutlined />,
        component: React.lazy(() => import('@/pages/Store/App')),
      },
      {
        path: '/store/doc',
        title: '文档',
        icon: <FileTextOutlined />,
        component: React.lazy(() => import('@/pages/Store/Doc')),
      },
      {
        path: '/store/data',
        title: '数据',
        icon: <FundOutlined />,
        component: React.lazy(() => import('@/pages/Store/Data')),
      },
      {
        path: '/store/src',
        title: '资源',
        icon: <DatabaseOutlined />,
        component: React.lazy(() => import('@/pages/Store/Src')),
      },
    ],
  },
];

/* 市场 */
const MarketRouter: IRouteConfig[] = [
  {
    path: '/market',
    component: React.lazy(() => import('@/pages/Market')),
    title: '市场',
    icon: 'icon-guangshangcheng',
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
      {
        path: '/market',
        title: '市场',
        render: () => <RouterRedirect to="/market/app" />,
      },
    ],
  },
];

/* 设置 */
const SettingRouter: IRouteConfig[] = [
  {
    path: '/setting',
    title: '设置',
    icon: 'icon-setting',
    component: React.lazy(() => import('@/pages/Setting')),
    routes: [
      {
        path: '/setting/info',
        title: '单位信息',
        icon: <InfoCircleOutlined />,
        component: React.lazy(() => import('@/pages/Setting/Info')),
      },
      {
        path: '/setting/dept',
        title: '部门设置',
        icon: <ApartmentOutlined />,
        component: React.lazy(() => import('@/pages/Setting/Dept')),
      },
      {
        path: '/setting/group',
        title: '集团设置',
        icon: 'icon-setting',
        component: React.lazy(() => import('@/pages/Setting/Group')),
      },
      {
        path: '/setting/help',
        title: '帮助中心',
        icon: <SmileOutlined />,
        component: React.lazy(() => import('@/pages/Setting/Help')),
      },
      {
        path: '/setting/homeset',
        title: '单位首页',
        icon: 'icon-setting',
        component: React.lazy(() => import('@/pages/Setting/Homeset')),
      },

      {
        path: '/setting/data',
        title: '数据设置',
        icon: 'icon-setting',
        component: React.lazy(() => import('@/pages/Setting/Data')),
      },
      {
        path: '/setting/src',
        title: '资源设置',
        icon: 'icon-setting',
        component: React.lazy(() => import('@/pages/Setting/Src')),
      },
      {
        path: '/setting/app',
        title: '应用设置',
        icon: <AppstoreOutlined />,
        component: React.lazy(() => import('@/pages/Setting/App')),
      },
      {
        path: '/setting/flow',
        title: '流程设置',
        icon: <ForkOutlined />,
        component: React.lazy(() => import('@/pages/Setting/Flow')),
      },
      {
        path: '/setting/standard',
        title: '标准设置',
        icon: 'icon-setting',
        component: React.lazy(() => import('@/pages/Setting/Standard')),
      },
      {
        path: '/setting/auth',
        title: '权限设置',
        icon: <SettingOutlined />,
        component: React.lazy(() => import('@/pages/Setting/Auth')),
      },
    ],
  },
];

/* 个人 */
const PersonRouter: IRouteConfig[] = [
  {
    path: '/person',
    title: '我的',
    icon: <UserOutlined />,
    component: React.lazy(() => import('@/pages/Person')),
    routes: [
      {
        path: '/person/info',
        title: '个人信息',
        icon: <InfoCircleOutlined />,
        component: React.lazy(() => import('@/pages/Person/Info')),
      },
      {
        path: '/person/passport',
        title: '通行设置',
        icon: <IdcardOutlined />,
        component: React.lazy(() => import('@/pages/Person/Passport')),
      },
      {
        path: '/person/friend',
        title: '好友设置',
        icon: <UserOutlined />,
        component: React.lazy(() => import('@/pages/Person/Friend')),
      },
      {
        path: '/person/cohort',
        title: '群组设置',
        icon: <TeamOutlined />,
        component: React.lazy(() => import('@/pages/Person/Cohort')),
      },
      {
        path: '/person/wallet',
        title: '卡包设置',
        icon: <WalletOutlined />,
        component: React.lazy(() => import('@/pages/Person/Wallet')),
      },
      {
        path: '/person/homeset',
        title: '首页设置',
        icon: <HomeOutlined />,
        component: React.lazy(() => import('@/pages/Person/Homeset')),
      },
      {
        path: '/person/help',
        title: '帮助中心',
        icon: <SmileOutlined />,
        component: React.lazy(() => import('@/pages/Person/Help')),
      },
      {
        path: '/person/address',
        title: '地址管理',
        icon: <HomeOutlined />,
        component: React.lazy(() => import('@/pages/Person/Address')),
      },
      {
        path: '/person/certificate',
        title: '证书管理',
        icon: <VerifiedOutlined />,
        component: React.lazy(() => import('@/pages/Person/Certificate')),
      },
      {
        path: '/person/safe',
        title: '安全管理',
        icon: <SafetyOutlined />,
        component: React.lazy(() => import('@/pages/Person/Safe')),
      },
      {
        path: '/person/message',
        title: '消息设置',
        icon: <MessageOutlined />,
        component: React.lazy(() => import('@/pages/Person/Message')),
      },
      {
        path: '/person/theme',
        title: '主题设置',
        icon: <GiftOutlined />,
        component: React.lazy(() => import('@/pages/Person/Theme')),
      },
      {
        path: '/person/lang',
        title: '语言设置',
        icon: <GlobalOutlined />,
        component: React.lazy(() => import('@/pages/Person/Lang')),
      },
      {
        path: '/person/standard',
        title: '标准设置',
        icon: <DatabaseOutlined />,
        component: React.lazy(() => import('@/pages/Person/Standard')),
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
      {
        path: '*',
        title: '页面不存在',
        component: React.lazy(() => import('@/pages/NoFond')),
        // render: () => <RouterRedirect to="/noFond" />,
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
