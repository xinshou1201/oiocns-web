import { Button, Card, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Title from 'antd/lib/typography/Title';
import React from 'react';

import { Company } from '@/module/org';
import companyService from '@/module/org/company';

import cls from './index.module.less';
import { useQuery } from '@tanstack/react-query';

/**
 * 用户信息-加入的单位(公司)
 * @returns
 */
const PersonInfoCompany: React.FC = () => {
  const { data } = useQuery<Company[]>(['company.getJoinedCompany'], () =>
    companyService.getJoinedCompany({ page: 1, pageSize: 1000 }),
  );

  const columns: ColumnsType<Company> = [
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
      render: (_, { team }) => team.remark,
    },
  ];
  return (
    <Card>
      <div className={cls['person-info-content-header']}>
        <Title level={4}>
          <strong>我的单位</strong>
        </Title>
        <div>
          <Button type="link">加入单位</Button>
        </div>
      </div>
      <Table dataSource={data} columns={columns} rowKey={(r) => r.id} />
    </Card>
  );
};

export default PersonInfoCompany;
