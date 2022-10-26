/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { chat } from '@/module/chat/orgchat';
import useChatStore from '@/store/chat';

import GroupContent from './components/groupContent/groupContent';
import GroupDetail from './components/groupDetail/groupDetail';
import GroupHeader from './components/groupHeader/groupHeader';
import GroupInputBox from './components/groupInputBox/groupInputBox';
import GroupSideBar from './components/groupSideBar/groupSideBar';
import charsStyle from './index.module.less';
const Chat = () => {
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);
  const [writeContent, setWriteContent] = useState<any>(null);
  const ChatStore: any = useChatStore();
  // 展示详情页
  const handleViewDetail = () => {
    setIsShowDetail(!isShowDetail);
  };
  const goPageEnds = () => {};
  useEffect(() => {
    chat.onMessage(() => {
      // contentWrapRef.value.
    });
  }, []);
  // 重新编辑
  const handleReWrites = (val: any) => {
    setWriteContent(val);
  };

  return (
    <div className={charsStyle.cohort_wrap}>
      <div className={charsStyle.custom_group_silder_menu}>
        <GroupSideBar />
      </div>
      {/* 右侧展示主体 */}
      <div className={charsStyle.chart_page}>
        {ChatStore.curChat !== null ? (
          <>
            {/* 头部 */}
            <GroupHeader handleViewDetail={handleViewDetail} />
            {/* 聊天区域 */}
            <div className={charsStyle.chart_content}>
              <GroupContent goPageEnds={goPageEnds} handleReWrites={handleReWrites} />
            </div>
            {/* 输入区域 */}
            <div className={charsStyle.chart_input}>
              <GroupInputBox writeContent={writeContent} />
            </div>
          </>
        ) : (
          ''
        )}
      </div>
      {/* 详情 */}
      {isShowDetail === true ? <GroupDetail /> : ''}
    </div>
  );
};
export default Chat;
