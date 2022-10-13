import { Button, Form, Input, message } from 'antd';
import React from 'react';

import useStore from '../../store';
import cls from './index.module.less';

const Register: React.FC = () => {
  const { login, loading } = useStore((state) => ({ ...state }));
  return (
    <div className={cls.loginBox}>
      <Form
        onFinish={({ account, password }) => {
          if (account && password) {
            return login({ account, password });
          }
          message.error('账号或密码错误，请重试！');
        }}>
        <Form.Item>
          <a>填写个人信息</a>
        </Form.Item>
        <Form.Item name="account" rules={[{ required: true, message: '请输入账户' }]}>
          <Input size="large" placeholder="请输入账户" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input
            size="large"
            placeholder="请输入密码(包含大小写字母和数字符号组合的6-15位密码)"
          />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input size="large" placeholder="请再次输入密码" />
        </Form.Item>
        <Form.Item>
          <Button
            block
            size="large"
            loading={loading}
            type="primary"
            htmlType="submit"
            className={cls.button}>
            提交
          </Button>
        </Form.Item>
        <Form.Item>
          <a>返回登录</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Register;
