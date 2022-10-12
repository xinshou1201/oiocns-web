import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, message } from 'antd';
import React from 'react';

import useStore from '../../store';
import cls from './index.module.less';

const Login: React.FC = () => {
  const { login, loading } = useStore((state) => ({ ...state }));
  return (
    <div className={cls.loginBox}>
      <Card bordered={false}>
        <Form
          onFinish={({ account, password }) => {
            if (account && password) {
              return login({ account, password });
            }
            message.error('账号或密码错误，请重试！');
          }}>
          <Form.Item name="account" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input prefix={<LockOutlined />} placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className={cls.button}>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
