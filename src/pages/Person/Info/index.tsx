import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Descriptions } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';

import PersonInfoCompany from './Company';
import cls from './index.module.less';

/**
 * 个人信息
 * @returns
 */
const PersonInfo = () => {
  // 信息标题
  const title = (
    <div className={cls['person-info-title']}>
      <div>
        <Title level={4}>当前用户</Title>
        <Avatar size={48} icon={<UserOutlined />} />
      </div>
      <div>
        <Button type="link">编辑信息</Button>
      </div>
    </div>
  );
  // 信息内容
  const content = (
    <div className={cls['person-info-content']}>
      <Card bordered={false}>
        <Descriptions title={title}>
          <Descriptions.Item label="姓名">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="性别">1810000000</Descriptions.Item>
          <Descriptions.Item label="邮箱">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="联系方式">empty</Descriptions.Item>
          <Descriptions.Item label="家庭地址">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
  return (
    <div>
      {content}
      <PersonInfoCompany></PersonInfoCompany>
    </div>
  );
};

export default PersonInfo;
