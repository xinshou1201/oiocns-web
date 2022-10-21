/* eslint-disable no-unused-vars */
import { Button, message, Popover } from 'antd';
import moment from 'moment';
import React from 'react';

import HeadImg from '@/components/headImg/headImg';
import { chat } from '@/module/chat/orgchat';
import useChatStore from '@/store/chat';

import contentStyle from './groupContent.module.less';

interface Iprops {
  goPageEnds: Function;
}

const GroupContent = (props: Iprops) => {
  const { goPageEnds } = props;
  const { RecallMsg }: any = useChatStore();
  const isShowTime = (index: number) => {
    if (index == 0) return true;
    return (
      moment(chat.curMsgs[index].createTime).diff(
        chat.curMsgs[index - 1].createTime,
        'minute',
      ) > 3
    );
  };

  // 显示聊天间隔时间
  const showChatTime = (chatDate: moment.MomentInput) => {
    const cdate = moment(chatDate);
    const days = moment().diff(cdate, 'day');
    switch (days) {
      case 0:
        return cdate.format('H:mm');
      case 1:
        return '昨天 ' + cdate.format('H:mm');
      case 2:
        return '前天 ' + cdate.format('H:mm');
    }
    const year = moment().diff(cdate, 'year');
    if (year == 0) {
      return cdate.format('M月D日 H:mm');
    }
    return cdate.format('yy年 M月D日 H:mm');
  };

  // 重新编辑功能
  const handleReWrite = (txt: string) => {
    console.log('重新编辑功能', txt);
    // info.value = txt;
    // emit('handleReWrite', txt);
  };
  const deleteMsg = (item: any) => {
    item.edit = false;
    chat.deleteMsg(item);
  };
  const canDelete = (item: any) => {
    if (item.chatId) {
      return true;
    }
    return item.spaceId === chat.userId;
  };
  const recallMsg = (item: any) => {
    item.edit = false;
    if (item.chatId) {
      item.id = item.chatId;
      delete item.chatId;
      delete item.sessionId;
    }
    RecallMsg(item).then((res: ResultType) => {
      if (res.data != 1) {
        message.warning('只能撤回2分钟内发送的消息');
      }
    });
  };

  // // 实时滚动条高度
  // const scrollTop = debounce(async () => {
  //   let scroll = nodeRef.scrollTop;
  //   if (chat.curMsgs.length > 0 && scroll < 20) {
  //     let beforeHeight = nodeRef.scrollHeight;
  //     let count = await chat.getHistoryMsg();
  //     if (count > 0) {
  //       nodeRef.scrollTop = nodeRef.scrollHeight - beforeHeight;
  //     }
  //   }
  // }, 200);

  // 滚动设置到底部
  const goPageEnd = () => {
    // nextTick(() => {
    //   // console.log('滚动底部', nodeRef.value.scrollHeight);
    //   nodeRef.value.scrollTop = nodeRef.value.scrollHeight;
    // });
  };
  goPageEnds(goPageEnd());

  return (
    <div className={contentStyle.group_content_wrap}>
      {chat.curMsgs.map((item, index) => {
        return (
          <React.Fragment key={item.fromId + index}>
            {/* 聊天间隔时间3分钟则 显示时间 */}
            {isShowTime(index) ? (
              <div className={contentStyle.chats_space_Time}>
                <span>{showChatTime(item.createTime)}</span>
              </div>
            ) : (
              ''
            )}
            {/* 重新编辑 */}
            {item.msgType === 'recall' ? (
              <div
                className={`${contentStyle.group_content_left} ${contentStyle.con} ${contentStyle.recall}`}>
                {item.showTxt}
                {item.allowEdit ? (
                  <span
                    className={contentStyle.reWrite}
                    onClick={() => {
                      handleReWrite(item.msgBody);
                    }}>
                    重新编辑
                  </span>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
            {/* 左侧聊天内容显示 */}
            {item.fromId !== chat.userId ? (
              <div className={`${contentStyle.group_content_left} ${contentStyle.con}`}>
                <Popover
                  content={
                    canDelete(item) ? (
                      <Button
                        type="text"
                        danger
                        onClick={() => {
                          deleteMsg(item);
                        }}>
                        删除
                      </Button>
                    ) : (
                      ''
                    )
                  }
                  trigger="click">
                  <div className={contentStyle.con_body}>
                    <HeadImg name={chat.getName(item.fromId)} label={''} />
                    <div className={`${contentStyle.con_content}`}>
                      {chat?.curChat?.typeName !== '人员' ? (
                        <div
                          className={`${contentStyle.con_content} ${contentStyle.name}`}>
                          {chat.getName(item.fromId) || ''}
                        </div>
                      ) : (
                        ''
                      )}
                      {/* <div
                        className={`${contentStyle.con_content} ${contentStyle.link}`}></div> */}
                      <div
                        className={`${contentStyle.con_content} ${contentStyle.txt}`}
                        dangerouslySetInnerHTML={{ __html: item.msgBody }}></div>
                    </div>
                  </div>
                </Popover>
              </div>
            ) : (
              <>
                {/* 右侧聊天内容显示 */}
                <div
                  className={`${contentStyle.group_content_right} ${contentStyle.con}`}>
                  <Popover
                    content={
                      <>
                        <Button
                          type="text"
                          style={{ color: '#3e5ed8' }}
                          onClick={() => {
                            recallMsg(item);
                          }}>
                          撤回
                        </Button>
                        {canDelete(item) ? (
                          <Button
                            type="text"
                            danger
                            onClick={() => {
                              deleteMsg(item);
                            }}>
                            删除
                          </Button>
                        ) : (
                          ''
                        )}
                      </>
                    }
                    trigger="click">
                    <div className={contentStyle.con_body}>
                      <div className={contentStyle.con_content}>
                        {/* <div
                          className={`${contentStyle.con_content} ${contentStyle.link}`}></div> */}
                        <div
                          className={`${contentStyle.con_content} ${contentStyle.txt}`}
                          dangerouslySetInnerHTML={{ __html: item.msgBody }}></div>
                      </div>
                      <HeadImg name={chat.getName(item.fromId)} />
                    </div>
                  </Popover>
                </div>
              </>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default GroupContent;
