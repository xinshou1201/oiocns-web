import { ParamsType, ProTable } from '@ant-design/pro-components';
import type { ProTableProps } from '@ant-design/pro-components';
import { Modal, ModalProps } from 'antd';
import React from 'react';

type TableSearchModalProps = {
  modalConfig: ModalProps; // 弹出框配置参数
  tableConfig: ProTableProps<DataType, ParamsType, 'text'>; // protable 配置参数
};
/* 
  弹出框表格查询
*/
const TableSearchModal: React.FC<TableSearchModalProps> = ({
  modalConfig,
  tableConfig,
}) => {
  const modalprops = {
    title: '搜索弹出框 ',
    okText: '确认',
    cancelText: '取消',
    width: 720,
    ...modalConfig,
  };
  const tableProps = {
    options: false,
    manualRequest: true,
    rowKey: 'id',
    search: {
      labelWidth: 'auto',
    },
    ...tableConfig,
  };
  return (
    <Modal {...modalprops}>
      <ProTable {...tableProps} />
    </Modal>
  );
};
export default TableSearchModal;
