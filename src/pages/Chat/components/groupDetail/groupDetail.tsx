/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Empty, Modal, Row } from 'antd';
import React, { useEffect, useState } from 'react';

import HeadImg from '@/components/headImg/headImg';
import { chat } from '@/module/chat/orgchat';

import detailStyle from './groupdetail.module.less';

// interface Iprops {
//   clearHistoryMsg?: Function;
// }
interface itemResult {
  code: string;
  createTime: string;
  createUser: string;
  id: string;
  name: string;
  status: number;
  thingId: string;
  typeName: string;
  updateTime: string;
  updateUser: string;
  version: string;
}

const Groupdetail = () => {
  // const { clearHistoryMsg } = props;
  // const openDialogAdd = () => {
  //   dialogVisible.value = true;
  //   chat.chats.forEach((item) => {
  //     if (item.id === chat.userId) {
  //       state.friendsData = item.chats.filter((c) => {
  //         if (c.typeName === '人员') {
  //           let exist = false;
  //           chat.qunPersons.forEach((p) => {
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 邀请好友
  const [isShiftUp, setIsShiftUp] = useState<boolean>(false); // 移出群聊
  const [showPersons, setShowPersons] = useState<any>(); // moke
  const [state, setState] = useState<any>([]); // moke

  useEffect(() => {
    const a: any = [];
    for (let i = 1; i <= 16; i++) {
      a.push(i);
    }
    setShowPersons(a);
    setState(a);
  }, []);
  // 确认
  const handleOk = () => {
    setIsModalOpen(false);
    setIsShiftUp(false);
  };
  // 取消
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsShiftUp(false);
  };
  // 添加选择人员事件
  const onClickBox = (item: itemResult, index: number) => {
    if (state?.ids.indexOf(item.id) !== -1) {
      state.ids.splice(state.ids.indexOf(item.id), 1);
    } else {
      state.ids.push(item.id);
    }
  };
  // 移出选择人员事件
  const onClickBoxDel = (item: itemResult, index: number) => {
    if (state.delids.indexOf(item.id) !== -1) {
      state.delids.splice(state.delids.indexOf(item.id), 1);
    } else {
      state.delids.push(item.id);
    }
  };
  console.log('详情', chat);

  return (
    <>
      <div className={detailStyle.group_detail_wrap}>
        <Row style={{ paddingBottom: '12px' }}>
          <Col span={4}>
            <HeadImg name={chat.curChat?.name} label={''} />
          </Col>
          <Col span={20}>
            {/* <h4 className={detailStyle.title}>{chat.curChat?.name}</h4>
            <div className="base-info-desc">{chat.curChat?.remark}</div> */}
            <h4 className={detailStyle.title}>
              兔鸟<span className={detailStyle.number}>(28)</span>
            </h4>
            <div className={detailStyle.base_info_desc}>打刀妹先打嘴</div>
          </Col>
        </Row>
        <ul className={detailStyle.user_list}>
          <ul className={`${detailStyle.img_list} ${detailStyle.con}`}>
            {/* {showPersons.map((item, index) => {
              return (
                <div key={item.id} title={item.name}>
                  HeadImg
                  <span className="img-list-con-name">{item.name}</span>
                </div>
              );
            })} */}
            {showPersons &&
              showPersons.map((item: any, index: any) => {
                return (
                  <div
                    key={item.id}
                    title={item.name}
                    className={detailStyle.show_persons}>
                    <HeadImg name={chat.curChat?.name} label={''} />
                    {/* <span className="img-list-con-name">{item.name}</span> */}
                    <span className={detailStyle.img_list_con_name}>王雨</span>
                  </div>
                );
              })}
            {/* {chat.curChat?.typeName === '群组' ? ( */}
            {'群组' === '群组' ? (
              <>
                <div
                  className={`${detailStyle.img_list_con} ${detailStyle.img_list_add}`}
                  onClick={() => {
                    // openDialogAdd();
                    setIsModalOpen(true);
                  }}>
                  +
                </div>
                <div
                  className={`${detailStyle.img_list_con} ${detailStyle.img_list_add}`}
                  onClick={() => {
                    // openDialogDel();
                    setIsShiftUp(true);
                  }}>
                  {/* <MinusOutlined /> */}-
                </div>
              </>
            ) : (
              ''
            )}

            {/* {chat.curChat?.personNum > 13 ? ( */}
            {showPersons && showPersons.length > 13 ? (
              <span
                className={`${detailStyle.img_list} ${detailStyle.more_btn}`}
                onClick={() => {
                  chat.getPersons(false);
                }}>
                查看更多
                <span className={detailStyle.more_btn_icon}>
                  <DownOutlined />
                </span>
              </span>
            ) : (
              ''
            )}
          </ul>

          {/* {chat.curChat?.typeName === '群组' ? ( */}
          {'群组' === '群组' ? (
            <>
              <div className={`${detailStyle.con} ${detailStyle.setting_con} `}>
                <span className={detailStyle.con_label}>群聊名称</span>
                <span className={detailStyle.con_value}>市场部第一小组</span>
              </div>
              <div className={`${detailStyle.con} ${detailStyle.setting_con} `}>
                <span className={detailStyle.con_label}>群聊描述</span>
                <span className={detailStyle.con_value}>市场部第一小组</span>
              </div>
              <div className={`${detailStyle.con} ${detailStyle.setting_con} `}>
                <span className={detailStyle.con_label}>我在本群的昵称</span>
                <span className={detailStyle.con_value}>测试昵称</span>
              </div>
            </>
          ) : (
            ''
          )}
          <div className={`${detailStyle.con} ${detailStyle.check_con}`}>
            <span>消息免打扰</span>
            <Checkbox />
          </div>
          <div className={`${detailStyle.con} ${detailStyle.check_con}`}>
            <span>{chat.curChat?.typeName !== '人员' ? '置顶群聊' : '置顶聊天'}</span>
            <Checkbox />
          </div>
          <div className={`${detailStyle.con} ${detailStyle.check_con}`}>
            <span>查找聊天记录</span>
            <RightOutlined />
          </div>
        </ul>
        {chat.curChat?.spaceId === chat.userId ? (
          <div className={`${detailStyle.footer} ${detailStyle.group_detail_wrap}`}>
            <Button
              type="primary"
              onClick={() => {
                chat.clearMsg();
              }}>
              清空聊天记录
            </Button>
            {chat.curChat?.typeName === '群组' ? (
              <>
                <Button type="primary" danger>
                  退出该群
                </Button>
                {/* <Button type="primary" danger>
                  解散该群
                </Button> */}
              </>
            ) : (
              <>
                <Button type="primary" danger>
                  删除好友
                </Button>
              </>
            )}
          </div>
        ) : (
          ''
        )}
      </div>
      <Modal
        title="邀请好友"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        getContainer={false}>
        <div className={detailStyle.invitateBox}>
          {state && state.length > 0 ? (
            <>
              {state.friendsData?.map((item: any, index: any) => {
                return (
                  <div
                    key={item.id}
                    className={`${detailStyle.invitateBox} ${detailStyle.box}`}
                    onClick={() => {
                      onClickBox(item, index);
                    }}>
                    <div className={`${detailStyle.invitateBox} ${detailStyle.flex}`}>
                      <HeadImg name={item?.name} />
                      <div className={`${detailStyle.invitateBox} ${detailStyle.name}`}>
                        王雨
                      </div>
                    </div>
                    <div
                      className={`${detailStyle.invitateBox} ${detailStyle.btn}`}
                      // style={state?.ids.includes(item.id) ? 'background:#466DFF' : ''}
                    >
                      {state?.ids.includes(item.id) ? (
                        <div
                          className={`${detailStyle.invitateBox} ${detailStyle.btn} ${detailStyle.in}`}></div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <Empty description={<span>暂无可拉取好友</span>} />
          )}
        </div>
      </Modal>
      <Modal
        title="移出群聊"
        open={isShiftUp}
        onOk={handleOk}
        onCancel={handleCancel}
        getContainer={false}>
        <div className={detailStyle.invitateBox}>
          <>
            {state.friendsData?.map((item: any, index: any) => {
              return (
                <div
                  key={item.id}
                  className={`${detailStyle.invitateBox} ${detailStyle.box}`}
                  onClick={() => {
                    onClickBoxDel(item, index);
                  }}>
                  <div className={`${detailStyle.invitateBox} ${detailStyle.flex}`}>
                    <HeadImg name={item?.name} />
                    <div className={`${detailStyle.invitateBox} ${detailStyle.name}`}>
                      王雨
                    </div>
                  </div>
                  <div
                    className={`${detailStyle.invitateBox} ${detailStyle.btn}`}
                    // style={state?.ids.includes(item.id) ? 'background:#466DFF' : ''}
                  >
                    {state?.ids.includes(item.id) ? (
                      <div
                        className={`${detailStyle.invitateBox} ${detailStyle.btn} ${detailStyle.in}`}></div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              );
            })}
          </>
        </div>
      </Modal>
    </>
  );
};
export default Groupdetail;
