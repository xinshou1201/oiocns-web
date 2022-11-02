import { Card, Avatar, Space, Tag, Typography } from 'antd';
import React from 'react';
import { ApprovalType } from '@/module/todo/typings';
import styles from './index.module.less';
import moment from 'moment';

const { Meta } = Card;
/**
 *
 * @param data <T extends ApprovalType> 需要渲染的数据列表
 * @params statusType 事项 卡片tag显示的类型
 * @returns JSX.Element
 */
const TableItemCard = <T extends ApprovalType>(props: {
  data: T[];
  targetOrTeam: 'target' | 'team';
  statusType: string;
}) => {
  const { data, statusType, targetOrTeam } = props;
  return (
    <>
      {data.map((item: T) => {
        return (
          <Card key={item.id} className={styles[`table-card`]}>
            <Meta
              avatar={
                <Avatar className={styles[`card-icon`]} size="large">
                  {item[targetOrTeam].name.substring(0, 1)}
                </Avatar>
              }
              title={
                <Space>
                  <span className={styles['card-title']}>{item[targetOrTeam].name}</span>
                  <Tag color="#5BD8A6">{statusType}</Tag>
                </Space>
              }
              description={
                <Typography.Text type="secondary" className={styles['card-description']}>
                  {moment(item.createTime).format('YYYY/MM/DD HH:mm:ss')}
                </Typography.Text>
              }
            />
          </Card>
        );
      })}
    </>
  );
};
export default TableItemCard;
