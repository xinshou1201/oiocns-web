import CardOrTableComp from '@/components/CardOrTableComp';
import PageCard from '../components/PageCard';
import TableItemCard from '../components/TableItemCard';
import { ApprovalType } from '@/module/todo/typings';
import { ProColumns } from '@ant-design/pro-table';
import { Button, message, Space, Tag } from 'antd';
import todoService, { tabStatus } from '@/module/todo';
import React, { useState, useEffect } from 'react';
import { IdPage } from '@/module/typings';

// import styles from './index.module.less';

const storeService = new todoService('market');
/**
 * 批量同意
 * @param ids  React.Key[] 选中的数据id数组
 */
const handleApproveSelect = async (ids: React.Key[]) => {
  if (ids.length > 0) {
    const { success } = await storeService.approve(ids.toString());
    if (success) {
      message.success('添加成功！');
    } else {
      message.error('抱歉，提交失败');
    }
  }
};

// 生成说明数据
const tableOperation = (activeKey: string, item: ApprovalType) => {
  return activeKey == '1'
    ? [
        {
          key: 'approve',
          label: '同意',
          onClick: () => {
            storeService.approve(item.id, 100); // 0-100 待批 //100-200 已批 200 以上是拒绝
            console.log('同意', 'approve', item);
          },
        },
        {
          key: 'refuse',
          label: '拒绝',
          onClick: () => {
            storeService.refuse(item.id, 201);
            console.log('拒绝', 'back', item);
          },
        },
      ]
    : [
        {
          key: 'retractApply',
          label: '取消申请',
          onClick: () => {
            storeService.retractApply(item.id);
            console.log('同意', 'approve', item);
          },
        },
      ];
};

// 卡片渲染
type TodoCommonTableProps = {};
/**
 * 办事-加入市场审批
 * @returns
 */
const TodoStore: React.FC<TodoCommonTableProps> = () => {
  const [activeKey, setActiveKey] = useState<string>(storeService.activeStatus);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [pageData, setPageData] = useState<ApprovalType[]>([]);
  const [total, setPageTotal] = useState<number>(0);
  const columns: ProColumns<ApprovalType>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: 60,
    },
    {
      title: '市场名称',
      dataIndex: 'name',
    },
    {
      title: '市场编码',
      dataIndex: 'code',
      render: () => {
        return <Tag color="#5BD8A6">加好友</Tag>;
      },
    },
    {
      title: '申请人',
      dataIndex: '',
      render: (_, row) => {
        return row.target.name;
      },
    },
    {
      title: '申请时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
    },
  ];
  // 获取申请/审核列表
  const handlePageChange = async (page: number, pageSize: number) => {
    const { data = [], total } = await storeService.getList<ApprovalType, IdPage>({
      id: '0',
      page: page,
      pageSize: pageSize,
    });
    setPageData(data);
    setPageTotal(total);
  };
  useEffect(() => {
    handlePageChange(1, 12);
  }, [activeKey]);

  return (
    <PageCard
      tabList={storeService.statusList}
      activeTabKey={activeKey}
      onTabChange={(key: string) => {
        storeService.activeStatus = key as tabStatus;
        setActiveKey(key as string);
      }}
      tabBarExtraContent={
        <Space>
          <Button
            key="approve"
            type="primary"
            onClick={() => handleApproveSelect(selectedRowKeys)}>
            同意
          </Button>
          <Button key="2">拒绝</Button>
          <Button key="3">打印</Button>
        </Space>
      }>
      <CardOrTableComp
        rowKey={'id'}
        bordered={false}
        columns={columns}
        dataSource={pageData}
        total={total}
        onChange={handlePageChange}
        operation={(item: ApprovalType) => tableOperation(activeKey, item)}
        renderCardContent={(arr) => (
          <TableItemCard<ApprovalType>
            data={arr}
            statusType={'应用'}
            targetOrTeam="team"
          />
        )}
        rowSelection={{
          onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(
              `selectedRowKeys: ${selectedRowKeys}`,
              'selectedRows: ',
              selectedRows,
            );
            setSelectedRowKeys(selectedRowKeys);
          },
        }}
        tableAlertOptionRender={() => {
          return (
            <Space size={16}>
              <a>批量同意</a>
              <a>批量拒绝</a>
            </Space>
          );
        }}
      />
    </PageCard>
  );
};

export default TodoStore;
