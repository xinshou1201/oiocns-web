import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import React, { useState } from 'react';

import { chat } from '@/module/chat/orgchat';

import HeadImg from '../headImg/headImg';
import header from './groupHeader.module.less';

interface Iprops {
  handleViewDetail: Function;
}

const GroupHeader = (props: Iprops) => {
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
  return (
    <div className={header.group_header_wrap}>
      <ul className={`${header.user} flex`}>
        <HeadImg name={chat.curChat?.value?.name} label={label} />
        <div className="user-info">
          <div className="user-info-top flex">
            <p className="user-info-top-name">
              {chat.curChat?.value?.name}
              {chat.curChat?.value?.personNum > 0 ? (
                <span> ({chat.curChat?.value?.personNum}人)</span>
              ) : (
                ''
              )}
            </p>
            <Tag color="#3e5ed8">{chat.curChat?.value?.label}</Tag>
          </div>
        </div>
      </ul>
      <span className={header.btn_box}>
        {chat.curChat?.value?.typeName !== '人员' ? (
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
export default GroupHeader;
