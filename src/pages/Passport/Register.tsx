import { Button, Form, Input, Steps } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import cls from './index.module.less';

const { Step } = Steps;

const steps = ['账户验证', '填写信息'];

const PassportRegister: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div>
      <Form>
        <Form.Item>
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item} title={item} />
            ))}
          </Steps>
        </Form.Item>

        {current === 0 && (
          <div>
            <Form.Item
              name="account"
              rules={[{ required: true, message: '请输入用户名' }]}>
              <Input size="large" placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}>
              <Input.Password
                size="large"
                placeholder="请输入密码(6-15位：包含大小写字母数字和符号)"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请再次输入密码' }]}>
              <Input.Password size="large" placeholder="请再次输入密码" />
            </Form.Item>
            <Form.Item>
              <Button
                block
                type="primary"
                size="large"
                htmlType="submit"
                onClick={() => next()}>
                下一步
              </Button>
            </Form.Item>
            <div className={cls.line}>
              <div></div>
              <div className={cls.text}>
                已有账户?
                <Link to="/passport/login">返回登录</Link>
              </div>
            </div>
          </div>
        )}

        {current === 1 && (
          <div>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: '请输入电话号码' }]}>
              <Input size="large" placeholder="请输入电话号码" />
            </Form.Item>
            <Form.Item
              name="nickName"
              rules={[{ required: true, message: '请输入昵称' }]}>
              <Input size="large" placeholder="请输入昵称" />
            </Form.Item>
            <Form.Item
              name="name"
              rules={[{ required: true, message: '请输入真实姓名' }]}>
              <Input size="large" placeholder="请输入真实姓名" />
            </Form.Item>
            <Form.Item name="motto" rules={[{ required: true, message: '请输入座右铭' }]}>
              <Input size="large" placeholder="请输入座右铭" />
            </Form.Item>
            <Form.Item>
              <Button
                block
                type="primary"
                size="large"
                htmlType="submit"
                onClick={() => next()}>
                注册
              </Button>
            </Form.Item>
            <div className={cls.line}>
              <Button type="link" onClick={() => prev()} className={cls.prev}>
                上一步
              </Button>
              <div className={cls.text}>
                已有账户?
                <Link to="/passport/login">返回登录</Link>
              </div>
            </div>
          </div>
        )}
      </Form>
    </div>
  );
};
export default PassportRegister;
