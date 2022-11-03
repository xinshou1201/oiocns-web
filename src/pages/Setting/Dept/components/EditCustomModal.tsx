import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

interface Iprops {
  title: string;
  open: boolean;
  onOk: () => void;
  handleOk: () => void;
}

const { TextArea } = Input;

const EditCustomModal = (props: Iprops) => {
  const { open, title, onOk, handleOk } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      name: '王一博',
      code: '91310000MA1H3NAH64',
      describe: '顶顶顶顶顶顶顶',
    });
  }, []);
  return (
    <Modal title={title} open={open} onOk={onOk} onCancel={handleOk}>
      <Form form={form} name="control-hooks">
        <Form.Item name="name" label="单位名称">
          <Input placeholder="请输入单位名称" />
        </Form.Item>
        <Form.Item name="code" label="单位编号">
          <Input placeholder="请输入单位编号" />
        </Form.Item>
        <Form.Item name="describe" label="单位描述">
          <TextArea
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            placeholder="请输入单位描述"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCustomModal;
