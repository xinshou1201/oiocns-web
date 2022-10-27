/* eslint-disable no-unused-vars */
import { SearchOutlined } from '@ant-design/icons';
import { Input, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';

import HeadImg from '@/components/headImg/headImg';
import { chat } from '@/module/chat/orgchat';
import useChatStore from '@/store/chat';
import { formatDate } from '@/utils/index';

import sideStyle from './groupSidebar.module.less';

const GroupSideBar = () => {
  const getInfo = () => {
    const data = chat.chats;
    if (data.length === 0) {
      setTimeout(() => {
        getInfo();
      }, 300);
    }
  };
  getInfo();
  const ChatStore: any = useChatStore();
  const [searchValue, setSearchValue] = useState<string>(''); // 搜索值
  let [openIdArr, setOpenIdArr] = useState<Array<string>>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false); // 是否已加载--判断是否需要默认打开
  const onChange = (values: string) => {
    setSearchValue(values);
  };

  //根据搜索条件-输出展示列表
  const showList = (): ImMsgType[] => {
    let topGroup: any = {
      id: 'toping',
      name: '置顶会话',
    };
    topGroup.chats = [];
    let showInfoArr = chat.chats;
    showInfoArr = showInfoArr.map((child: ImMsgType) => {
      let chats = child.chats.filter((item: ImMsgChildType) => {
        let matched =
          !searchValue ||
          item.name.includes(searchValue) ||
          item.msgBody?.includes(searchValue);
        if (matched && item.isTop) {
          topGroup.chats.push(item);
        }
        return matched && !item.isTop;
      });
      return {
        id: child.id,
        name: child.name,
        chats: chats,
      };
    });
    // 首次进入页面默认打开第一个分组
    if (!isMounted && openIdArr.length === 0 && showInfoArr.length > 0) {
      // // 当从关系-群组 进入会话携带id 则进入对应聊天室
      // if (routerParams.defaultOpenID) {
      //   openIdArr.push(routerParams.spaceId as string);
      //   const aimItem = showInfoArr
      //     .find((item) => item.id == routerParams.spaceId)
      //     ?.chats.find((item) => item.id == routerParams.defaultOpenID);
      //   aimItem && openChanged(aimItem);
      // } else {
      if (topGroup.chats.length < 1) {
        openIdArr.push(showInfoArr[0].id);
      } else {
        openIdArr.push('toping');
      }
      // }
      setIsMounted(true);
    }
    if (topGroup.chats.length > 0) {
      return [topGroup, ...showInfoArr];
    }
    return showInfoArr;
  };
  const openChangeds = async (child: ImMsgChildType) => {
    await ChatStore.setCurrent(child);
    // openChanged(child);
  };

  useEffect(() => {
    showList();
  }, []);
  const handleOpenSpace = (selectedID: string) => {
    const isOpen = openIdArr.includes(selectedID);
    if (isOpen) {
      openIdArr = openIdArr.filter((item: string) => item !== selectedID);
      setOpenIdArr(openIdArr);
    } else {
      openIdArr = [...openIdArr, selectedID];
      setOpenIdArr(openIdArr);
    }
  };
  // 时间处理
  const handleFormatDate = (timeStr: string) => {
    const nowTime = new Date().getTime();
    const showTime = new Date(timeStr).getTime();
    // 超过一天 展示 月/日
    if (nowTime - showTime > 3600 * 24 * 1000) {
      return formatDate(timeStr, 'M月d日');
    }
    // 不超过一天 展示 时/分
    return formatDate(timeStr, 'H:mm');
  };

  return (
    <div className={sideStyle.chart_side_wrap}>
      <div className={sideStyle.group_side_bar_search}>
        <Input
          placeholder="搜索"
          prefix={<SearchOutlined />}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="会话" key="1">
          <div className={sideStyle.group_side_bar_wrap}>
            {ChatStore.sessionChats &&
              ChatStore.sessionChats?.map((child: any) => {
                return (
                  <div className={sideStyle.con_body_session} key={child.id}>
                    <HeadImg name={child.name} label={child.label} />
                    {child.noRead > 0 ? (
                      <div className={`${sideStyle.group_con} ${sideStyle.dot}`}>
                        <span>{child.noRead}</span>
                      </div>
                    ) : (
                      ''
                    )}
                    <div
                      className={sideStyle.group_con_show}
                      onClick={() => {
                        openChangeds(child);
                      }}>
                      <div className={`${sideStyle.group_con_show} ${sideStyle.name}`}>
                        <div
                          className={`${sideStyle.group_con_show} ${sideStyle.name} ${sideStyle.label}`}>
                          {child.name}
                        </div>
                        <div
                          className={`${sideStyle.group_con_show} ${sideStyle.name} ${sideStyle.time}`}>
                          {handleFormatDate(child.msgTime)}
                        </div>
                      </div>
                      <div className={`${sideStyle.group_con_show} ${sideStyle.msg}`}>
                        {child.showTxt}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="通讯录" key="2">
          <div className={sideStyle.group_side_bar_wrap}>
            {chat.chats.map((item: any) => {
              return (
                <div key={item.id}>
                  <div className={`${sideStyle.group_con} ${sideStyle.item}`}>
                    {/* 分组标题 */}
                    <div
                      className={`${sideStyle.con_title} ${sideStyle.flex} ${
                        openIdArr.includes(item.id) ? sideStyle.active : ''
                      }`}
                      onClick={() => {
                        handleOpenSpace(item.id);
                      }}>
                      <span>
                        {item.name}({item?.chats?.length ?? 0})
                      </span>
                    </div>
                    {/* 展开的分组下的人员 */}
                    {openIdArr?.includes(item.id) ? (
                      <>
                        {item.chats.map((child: any) => {
                          return (
                            <div className={sideStyle.con_body} key={child.id}>
                              <HeadImg name={child.name} label={child.label} />
                              {child.noRead > 0 ? (
                                <div
                                  className={`${sideStyle.group_con} ${sideStyle.dot}`}>
                                  <span>{child.noRead}</span>
                                </div>
                              ) : (
                                ''
                              )}
                              <div
                                className={sideStyle.group_con_show}
                                onClick={() => {
                                  openChangeds(child);
                                }}>
                                <div
                                  className={`${sideStyle.group_con_show} ${sideStyle.name}`}>
                                  <div
                                    className={`${sideStyle.group_con_show} ${sideStyle.name} ${sideStyle.label}`}>
                                    {child.name}
                                  </div>
                                  <div
                                    className={`${sideStyle.group_con_show} ${sideStyle.name} ${sideStyle.time}`}>
                                    {handleFormatDate(child.msgTime)}
                                  </div>
                                </div>
                                <div
                                  className={`${sideStyle.group_con_show} ${sideStyle.msg}`}>
                                  {child.showTxt}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      ''
                    )}
                    {/* 如果该分组没有被打开 但是有未读消息 则把未读消息会话显示出来 */}
                    <>
                      {!openIdArr?.includes(item.id) ? (
                        <>
                          {item.chats
                            .filter((v: any) => v.noRead > 0)
                            .map((child: any) => {
                              return (
                                <div
                                  key={child.id + child.name}
                                  className={`${sideStyle.con_body} ${sideStyle.open_item}`}>
                                  <HeadImg name={child.name} label={child.label} />
                                  {child.noRead > 0 ? (
                                    <div
                                      className={`${sideStyle.group_con} ${sideStyle.dot}`}>
                                      <span>{child.noRead}</span>
                                    </div>
                                  ) : (
                                    ''
                                  )}
                                  <div
                                    className={`${sideStyle.group_con_show}`}
                                    onClick={() => {
                                      openChangeds(child);
                                    }}>
                                    <div
                                      className={`${sideStyle.group_con_show} ${sideStyle.name}`}>
                                      <div
                                        className={`${sideStyle.group_con_show} ${sideStyle.name} ${sideStyle.label}`}>
                                        {child.name}
                                      </div>
                                      <div
                                        className={`${sideStyle.group_con_show} ${sideStyle.name} ${sideStyle.time}`}>
                                        {handleFormatDate(child.msgTime)}
                                      </div>
                                    </div>
                                    <div
                                      className={`${sideStyle.group_con_show} ${sideStyle.msg}`}>
                                      {child.showTxt}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </>
                      ) : (
                        ''
                      )}
                    </>
                  </div>
                </div>
              );
            })}
          </div>
          {/* 鼠标右键 */}
          {/* {mousePosition.isShowContext ? (
            <div className={sideStyle.context_text_wrap}>
              {mousePosition.selectMenu.map((item) => {
                return (
                  <div key={item.value} className={sideStyle.context_menu_item}>
                    {item.label}
                  </div>
                );
              })}
            </div>
          ) : (
            ''
          )} */}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
export default GroupSideBar;
