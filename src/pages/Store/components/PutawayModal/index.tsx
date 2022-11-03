// import './index.less';
import React, { useState } from 'react';

import { Form, Input, Radio, Select } from 'antd';
interface indexType {
  initialValues: any; //props
  isReadOnly?: boolean;
  form: any;
}
const { TextArea } = Input;
const Index: React.FC<indexType> = ({ initialValues, form, isReadOnly = false }) => {
  const [readOnly] = useState<boolean>(isReadOnly);
  const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
    console.log('onFormLayoutChange', disabled);
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        form={form}
        onFinish={onFinish}
        initialValues={initialValues}
        onValuesChange={onFormLayoutChange}
        autoComplete="off"
        disabled={readOnly}>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </>
  );
};

export default Index;
