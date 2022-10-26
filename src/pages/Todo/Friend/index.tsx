import CardOrTableComp from '@/components/CardOrTableComp';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Card, Space } from 'antd';
import type { CardTabListType } from 'antd/lib/card';

import React, { useState } from 'react';

import styles from './index.module.less';
const tabs: CardTabListType[] = [
  { tab: '待办', key: '1' },
  { tab: '已办', key: '2' },
  { tab: '已完成', key: '3' },
  { tab: '我的发起', key: '4' },
  { tab: '已过期', key: '5' },
];
// const optionItems = (activeKey: string, item: any) => {
//   switch (activeKey) {
//     case '1':
//       return (item: any) => [
//         {
//           key: 'approve',
//           label: '审核',
//           onClick: () => {
//             console.log('审核', 'approve', item);
//           },
//         },
//         {
//           key: 'back',
//           label: '回退',
//           onClick: () => {
//             console.log('回退', 'back', item);
//           },
//         },
//       ];
//   }
// };
/**
 * 办事-好友申请
 * @returns
 */
const TodoFriend: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>();
  const columns: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
    },
    {
      title: '事项',

      dataIndex: 'name',
    },
    {
      title: '说明',

      dataIndex: 'remark',
    },
    {
      title: '发起人',

      dataIndex: 'createUser',
    },
    {
      title: '过期时间',

      dataIndex: 'createTime',
    },
  ];

  return (
    <Card
      className={styles[`friend-warp`]}
      tabList={tabs}
      bordered={false}
      headStyle={{ borderBottom: 0, fontSize: 12 }}
      activeTabKey={activeKey}
      onTabChange={(key: string) => {
        setActiveKey(key as string);
      }}
      tabBarExtraContent={
        <Space>
          <Button key="1" type="primary">
            审核
          </Button>
          <Button key="2" type="primary">
            回退
          </Button>
          <Button key="3" type="primary">
            打印
          </Button>
        </Space>
      }>
      <CardOrTableComp
        rowKey={'id'}
        bordered={false}
        columns={columns}
        dataSource={[
          {
            name: '“张三”想成为你的好友',
            remark: '你好，我是市场部新员工张三',
            createUser: '张三',
            createTime: '2022/10/4 20:00',
          },
        ]}
        hideOperation={activeKey !== '1' ? true : false}
        operation={(item: any) => [
          {
            key: 'approve',
            label: '审核申请',
            onClick: () => {
              console.log('审核', 'approve', item);
            },
          },
          {
            key: 'back',
            label: '回退申请',
            onClick: () => {
              console.log('回退', 'back', item);
            },
          },
        ]}
      />
    </Card>
  );
};

export default TodoFriend;
