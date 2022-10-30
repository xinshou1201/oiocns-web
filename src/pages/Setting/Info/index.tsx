import { Avatar, Button, Card, Descriptions } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import cls from './index.module.less';

/**
 * 单位信息
 * @returns
 */
const SettingInfo: React.FC = () => {
  // 信息标题
  const title = (
    <div className={cls['company-info-title']}>
      <div>
        <Title level={4}>当前单位</Title>
        <Avatar size={48}>杭</Avatar>
      </div>
      <div>
        <Button type="link">编辑信息</Button>
        <Button type="link">单位认证</Button>
        <Button type="link">更多</Button>
      </div>
    </div>
  );
  // 信息内容
  const content = (
    <div className={cls['company-info-content']}>
      <Card bordered={false}>
        <Descriptions title={title} bordered column={2}>
          <Descriptions.Item label="单位名称">杭州电子科技大学</Descriptions.Item>
          <Descriptions.Item label="单位法人">朱泽飞</Descriptions.Item>
          <Descriptions.Item label="社会统一信用代码">
            12330000470009026T
          </Descriptions.Item>
          <Descriptions.Item label="联系方式">暂无</Descriptions.Item>
          <Descriptions.Item label="单位地址" span={2}>
            杭州市杭州经济开发区白杨街道2号大街1158号
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
  return <div>{content}</div>;
};

export default SettingInfo;
