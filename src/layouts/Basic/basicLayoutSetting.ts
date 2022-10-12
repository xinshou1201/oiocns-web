export {};
// // ProLayout 支持的api https://procomponents.ant.design/components/layout
// export const layoutSetting = {

//     menu: {
//       type: 'group',
//       locale: false,
//       collapsedShowTitle: false,
//     },
//     // menuItemRender: (item, dom) => {
//     //   return (
//     //     <div>
//     //       <span className="ant-menu-title-content">
//     //         <Link to={item.path}>
//     //           {item?.icon ? (
//     //             <div className="ant-pro-base-menu-item-title">
//     //               <span className="anticon ant-pro-base-menu-item-icon ">{item?.icon}</span>
//     //             </div>
//     //           ) : (
//     //             <div>{item?.name}</div>
//     //           )}
//     //         </Link>
//     //       </span>
//     //     </div>
//     //   );
//     //   //   return <div onClick={item.onClick}>{item.icon}</div>
//     //   //   return (
//     //   //   <div
//     //   //     onClick={() => {
//     //   //       setPathname(item.path || '/welcome');
//     //   //     }}
//     //   //   >
//     //   //     {item.icon}
//     //   //   </div>
//     //   // )
//     // },
//     rightContentRender: () => <RightContent />,
//     // waterMarkProps: {
//     //   content: initialState?.currentUser?.name,
//     // },
//     // footerRender: () => <Footer />,
//     onPageChange: () => {
//       const { location } = history;
//       // 如果没有登录，重定向到 login
//       if (!initialState?.currentUser && location.pathname !== loginPath) {
//         history.push(loginPath);
//       }
//     },
//     layoutBgImgList: [
//       {
//         src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
//         left: 85,
//         bottom: 100,
//         height: '303px',
//       },
//       {
//         src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
//         bottom: -68,
//         right: -45,
//         height: '303px',
//       },
//       {
//         src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
//         bottom: 0,
//         left: 0,
//         width: '331px',
//       },
//     ],
//     links: isDev
//       ? [
//           <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
//             <LinkOutlined />
//             <span>OpenAPI 文档</span>
//           </Link>,
//         ]
//       : [],
//     menuHeaderRender: undefined,
//     // 自定义 403 页面
//     // unAccessible: <div>unAccessible</div>,
//     // 增加一个 loading 的状态
//     childrenRender: (children, props) => {
//       // if (initialState?.loading) return <PageLoading />;
//       return (
//         <>
//           <MainContentMenu />
//           {children}
//           {!props.location?.pathname?.includes('/login') && (
//             <SettingDrawer
//               disableUrlParams
//               enableDarkTheme
//               settings={initialState?.settings}
//               onSettingChange={(settings) => {
//                 setInitialState((preInitialState) => ({
//                   ...preInitialState,
//                   settings,
//                 }));
//               }}
//             />
//           )}
//         </>
//       );
//     },
//     ...initialState?.settings,

// };
