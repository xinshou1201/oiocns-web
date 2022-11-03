import React from 'react';
import CardOrTable from '@/components/CardOrTableComp';
import { Modal, Input } from 'antd';

interface Iprops {
  title: string;
  open: boolean;
  onOk: () => void;
  handleOk: () => void;
  columns?: any;
}

const AddPersonModal = (props: Iprops) => {
  const { title, open, onOk, handleOk, columns } = props;
  const columnsPerson = [
    ...columns,
    {
      title: '座右铭',
      dataIndex: 'caption',
    },
  ];
  return (
    <Modal title={title} open={open} onOk={onOk} onCancel={handleOk} width={800}>
      <Input placeholder="请输入" style={{ marginBottom: '12px' }} />
      <CardOrTable
        dataSource={[]}
        rowKey={'id'}
        showChangeBtn={false}
        hideOperation={true}
        columns={columnsPerson}
      />
    </Modal>
  );
};
export default AddPersonModal;
