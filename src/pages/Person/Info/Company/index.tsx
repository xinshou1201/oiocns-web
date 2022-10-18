import { Button, Card, Table } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';

import cls from './index.module.less';

/**
 * 用户信息-加入的单位(公司)
 * @returns
 */
const PersonInfoCompany = () => {
  const dataSource = [
    {
      id: 'name',
      name: '杭州电子科技大学',
      code: 32,
      remark: '杭州电子科技大学',
    },
    {
      id: 'code',
      name: '浙江省财政厅',
      code: 42,
      remark: '浙江省财政厅',
    },
  ];

  const columns = [
    {
      title: '单位名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '单位编码',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: '单位描述',
      dataIndex: 'remark',
      key: 'remark',
    },
  ];
  return (
    <Card>
      <div className={cls['person-info-content-header']}>
        <Title level={4}>已加入的单位</Title>
        <div>
          <Button type="link">加入单位</Button>
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
};

export default PersonInfoCompany;
