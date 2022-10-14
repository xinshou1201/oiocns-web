import { MinusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Input, Row } from 'antd';
import React from 'react';

import { chat } from '@/module/chat/orgchat';

import detail from './groupDetail.module.less';

const GroupDetail = () => {
  // const openDialogAdd = () => {
  //   dialogVisible.value = true;
  //   chat.chats.value.forEach((item) => {
  //     if (item.id === chat.userId.value) {
  //       state.friendsData = item.chats.filter((c) => {
  //         if (c.typeName === '人员') {
  //           let exist = false;
  //           chat.qunPersons.value.forEach((p) => {
  //             if (c.id === p.id) {
  //               exist = true;
  //             }
  //           });
  //           return !exist;
  //         }
  //         return false;
  //       });
  //     }
  //   });
  // };
  // const openDialogDel = () => {
  //   dialogVisibleDel.value = true;
  // };
  return (
    <>
      <div className={detail.group_detail_wrap}>
        <Row style={{ paddingBottom: '12px' }}>
          <Col span={4}>HeadImg</Col>
          <Col span={20}>
            <h4 className={detail.title}>{chat.curChat?.value?.name}</h4>
            <div className="base-info-desc">{chat.curChat?.value?.remark}</div>
          </Col>
        </Row>
        <ul className={detail.user_list}>
          {chat.curChat?.value?.typeName !== '人员' ? (
            <li className={`${detail.li_search} ${detail.con}`}>
              <p className="li-search-con">
                组成员
                <span className="li-search-con-num">
                  {chat.curChat?.value?.personNum}
                </span>
                人
              </p>
              <Input className="li-search-inp" placeholder="搜索" />
            </li>
          ) : (
            ''
          )}
          <ul className={`${detail.img_list} ${detail.con}`}>
            {chat.curChat?.value?.typeName === '群组' ? (
              <>
                <div
                  className="img-list-con img-list-add"
                  onClick={() => {
                    // openDialogAdd();
                  }}>
                  +
                </div>
                <div
                  className="img-list-con img-list-del"
                  onClick={() => {
                    // openDialogDel();
                  }}>
                  <MinusOutlined />
                </div>
              </>
            ) : (
              ''
            )}
            {/* {showPersons.map((item, index) => {
              return (
                <div key={item.id} title={item.name}>
                  HeadImg
                  <span className="img-list-con-name">{item.name}</span>
                </div>
              );
            })} */}
            {chat.curChat?.value?.personNum > 10 ? (
              <span
                className="img-list-more-btn"
                onClick={() => {
                  chat.getPersons(false);
                }}>
                查看更多
              </span>
            ) : (
              ''
            )}
          </ul>

          {chat.curChat?.value?.typeName === '群组' ? (
            <>
              <div className={`${detail.con} ${detail.setting_con} ${detail.border_b}`}>
                <span className={detail.con_label}>我在本群昵称</span>
                <span className="con-value">测试昵称</span>
              </div>
              <div className={`${detail.con} ${detail.setting_con} ${detail.border_b}`}>
                <span
                  className={
                    detail.con_label
                  }>{`${chat.curChat?.value?.typeName}备注`}</span>
                <span className="con-value">{chat.curChat?.value?.remark}</span>
              </div>
            </>
          ) : (
            ''
          )}
          <div className={`${detail.con} ${detail.check_con}`}>
            <Checkbox>
              {chat.curChat?.value?.typeName !== '人员'
                ? '设置群消息免打扰'
                : '设置免打扰'}
            </Checkbox>
          </div>
          <div className={`${detail.con} ${detail.check_con}`}>
            <Checkbox>
              {chat.curChat?.value?.typeName !== '人员' ? '置顶该群' : '置顶会话'}
            </Checkbox>
          </div>
        </ul>
        {chat.curChat?.value.spaceId === chat.userId?.value ? (
          <div className={detail.footer}>
            {chat.curChat?.value?.typeName === '群组' ? (
              <>
                <Button type="primary" danger>
                  退出该群
                </Button>
                <Button type="primary" danger>
                  解散该群
                </Button>
              </>
            ) : chat.curChat?.value?.typeName === '人员' ? (
              <>
                <Button type="primary" danger>
                  删除好友
                </Button>
              </>
            ) : (
              <Button
                type="primary"
                danger
                onClick={() => {
                  chat.clearMsg();
                }}>
                清空聊天记录
              </Button>
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
export default GroupDetail;
