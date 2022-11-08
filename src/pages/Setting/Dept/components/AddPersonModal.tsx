import React from 'react';
import { Modal, Transfer } from 'antd';

interface Iprops {
  title: string;
  open: boolean;
  onOk: () => void;
  handleOk: () => void;
}

const AddPersonModal = (props: Iprops) => {
  const { title, open, onOk, handleOk } = props;
  return (
    <Modal title={title} open={open} onOk={onOk} onCancel={handleOk}>
      <Transfer
        showSearch
        // dataSource={mockData}
        titles={['Source', 'Target']}
        // targetKeys={targetKeys}
        // selectedKeys={selectedKeys}
        // onChange={handleChange}
        // onSelectChange={handleSelectChange}
        // onScroll={handleScroll}
        // render={(item) => item.title}
        oneWay
        style={{ marginBottom: 16 }}
      />
    </Modal>
  );
};
export default AddPersonModal;
