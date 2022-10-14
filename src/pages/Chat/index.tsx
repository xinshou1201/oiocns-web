import React, { useState } from 'react';

import GroupContent from './components/groupContent/groupContent';
import GroupDetail from './components/groupDetail/groupDetail';
import GroupHeader from './components/groupHeader/groupHeader';
import GroupInputBox from './components/groupInputBox/groupInputBox';
import chars from './index.module.less';

const Chat = () => {
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);
  // 展示详情页
  const handleViewDetail = () => {
    setIsShowDetail(!isShowDetail);
  };
  return (
    <div className={chars.cohort_wrap}>
      <div className={chars.custom_group_silder_menu}>会话列表</div>
      {/* 右侧展示主体 */}
      <div className={chars.chart_page}>
        {/* 头部 */}
        <GroupHeader handleViewDetail={handleViewDetail} />
        {/* 聊天区域 */}
        <div className={chars.chart_content}>
          <GroupContent />
        </div>
        {/* 输入区域 */}
        <div className={chars.chart_input}>
          <GroupInputBox />
        </div>
      </div>
      {/* 详情 */}
      {isShowDetail === true ? <GroupDetail /> : ''}
    </div>
  );
};
export default Chat;
