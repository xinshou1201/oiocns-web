import { Card } from 'antd';
import React from 'react';

const tabs: CardTabListType[] = [
  { tab: '待办', key: '1' },
  // { tab: '已办', key: '2' },
  // { tab: '已完成', key: '3' },
  { tab: '我的发起', key: '2' },
];
/**
 * 办事-商店审核
 * @returns
 */
const TodoStore: React.FC = () => {
  return <Card tabs={tabs} activeTabKey></Card>;
};

export default TodoStore;
