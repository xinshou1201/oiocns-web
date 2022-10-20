/* eslint-disable no-unused-vars */
import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React, { useState } from 'react';

import HeadImg from '@/components/headImg/headImg';
import { chat } from '@/module/chat/orgchat';

import headerStyle from './groupheader.module.less';

interface Iprops {
  handleViewDetail: Function;
}

const Groupheader = (props: Iprops) => {
  const { handleViewDetail } = props;
  const [label, setLabel] = useState<string>('');
  const handleAddFun = () => {
    // emit('addUserOrCohort')
    // console.log('测试', info.detail);
    // dialogVisible.value = true;
  };
  const handleMoreFun = () => {
    handleViewDetail();
  };
  console.log('zzz', chat.curChat);

  return (
    <div className={headerStyle.group_header_wrap}>
      <div className={`${headerStyle.user} ${headerStyle.flex}`}>
        <HeadImg name={chat.curChat?.name} label={label} />
        <div className={headerStyle.user_info}>
          <div className={`${headerStyle.flex} ${headerStyle.user_info_top}`}>
            <div className={`${headerStyle.user_info_top_name}`}>
              {chat.curChat?.name}
              {chat?.curChat?.typeName === '群组' ? (
                <span>({chat?.curChat?.personNum})</span>
              ) : (
                <Breadcrumb>
                  <Breadcrumb.Item>杭州电子科技大学</Breadcrumb.Item>
                  <Breadcrumb.Item>同事</Breadcrumb.Item>
                </Breadcrumb>
              )}
            </div>
          </div>
        </div>
      </div>
      <span className={headerStyle.btn_box}>
        {chat.curChat?.typeName !== '人员' ? (
          <PlusOutlined
            style={{ fontSize: '20px', marginRight: '8px' }}
            onClick={handleAddFun}
          />
        ) : (
          ''
        )}
        <EllipsisOutlined style={{ fontSize: '20px' }} onClick={handleMoreFun} />
      </span>
    </div>
  );
};
export default Groupheader;
