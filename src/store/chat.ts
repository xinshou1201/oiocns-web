/* eslint-disable no-unused-vars */
import create from 'zustand';

// import AnyStore, { BadRequst } from '@/hubs/anystore';
import { chat } from '@/module/chat/orgchat';

const useChatStore = create((set) => ({
  hisMsgCollName: 'chat-message',
  closed: false,
  stoped: false,
  lastMsg: {},
  openChats: [],
  chats: [],
  userId: '',
  spaceId: '',
  curMsgs: [],
  nameMap: {},
  curChat: null, //ok
  authed: false,
  isconnecting: false,
  qunPersons: [],
  // 接收消息
  RecvMsg: () => {
    chat.connection.on('RecvMsg', (data: any) => {
      set({ data });
    });
  },
  // 撤回消息
  RecallMsg: async (msg: any) => {
    return await chat.connection.invoke('RecallMsg', msg);
  },
  _recallMsg: async (data: any) => {
    return await chat._recallMsg(data);
  },
  // 清空会话历史消息
  clearMsg: async () => {
    if (get().this.curChat) {
      this.anyStore
        .remove(
          this.hisMsgCollName,
          {
            sessionId: this.curChat.id,
          },
          'user',
        )
        .then((res: ResultType) => {
          // if (res.data > 0 && this.curMsgs.length > 0) {
          //   this.curMsgs = [];
          // }
        });
    }
  },
  //设置当前会话
  setCurrent: async (chats: ImMsgChildType | null) => {
    return await chat.setCurrent(chats);
  },
  //查询历史消息
  getHistoryMsg: async () => {
    return await chat.getHistoryMsg();
  },
}));

export default useChatStore;
