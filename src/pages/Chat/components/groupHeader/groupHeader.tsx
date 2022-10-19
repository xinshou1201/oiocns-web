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
  console.log('hahah', chat.chats);

  const { handleViewDetail } = props;
  const [label, setLabel] = useState<string>('');
  const [group, setGroup] = useState<number>(1); // moke数据 1是个人 2是群组
  const handleAddFun = () => {
    // emit('addUserOrCohort')
    // console.log('测试', info.detail);
    // dialogVisible.value = true;
  };
  const handleMoreFun = () => {
    handleViewDetail();
  };
  return (
    <div className={headerStyle.group_header_wrap}>
      <ul className={`${headerStyle.user} ${headerStyle.flex}`}>
        <HeadImg name={chat.curChat?.name} label={label} />
        <div className={headerStyle.user_info}>
          <div className={`${headerStyle.flex} ${headerStyle.user_info_top}`}>
            <div className={`${headerStyle.user_info_top_name}`}>
              {chat.curChat?.name}
              {/* {chat.curChat?.personNum > 0 ? (
                <span> ({chat.curChat?.personNum})</span>
              ) : (
                ''
              )} */}
              {group === 1 ? (
                <Breadcrumb>
                  <Breadcrumb.Item>杭州电子科技大学</Breadcrumb.Item>
                  <Breadcrumb.Item>同事</Breadcrumb.Item>
                </Breadcrumb>
              ) : (
                <span>(25)</span>
              )}
            </div>
            {/* <Tag color="#3e5ed8">{chat.curChat?.label}</Tag> */}
          </div>
        </div>
      </ul>
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
