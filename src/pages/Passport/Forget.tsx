import { Button, Form, Input, message, Tabs } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import useStore from '../../store';
import cls from './index.module.less';

const PassportForget: React.FC = () => {
  const { login, loading } = useStore((state) => ({ ...state }));
  return (
    <div>
      <Tabs size="large" items={[{ label: '忘记密码', key: 'title' }]} />
      <Form
        onFinish={({ account, password }) => {
          if (account && password) {
            return login({ account, password });
          }
          message.error('账号或密码错误，请重试！');
        }}>
        <Form.Item name="account" rules={[{ required: true, message: '请输入账户' }]}>
          <Input size="large" placeholder="请输入账户" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input
            size="large"
            placeholder="请输入密码(6-15位：包含大小写字母数字和符号)"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请再次输入密码' }]}>
          <Input size="large" placeholder="请再次输入密码" />
        </Form.Item>
        <Form.Item
          name="privateKey"
          rules={[{ required: true, message: '请输入注册时保存的私钥' }]}>
          <Input size="large" placeholder="请输入注册时保存的私钥" />
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
          <Link className={cls.text} to="/passport/login">
            返回登录
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default PassportForget;
