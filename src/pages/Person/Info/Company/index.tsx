import { Button, Card, Modal, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Title from 'antd/lib/typography/Title';
import React, { useState } from 'react';

import { Company, Person } from '@/module/org';
import companyService from '@/module/org/company';

import cls from './index.module.less';
import { useQuery } from '@tanstack/react-query';
// import SearchCompany from '@/bizcomponents/SearchCompany';
import SearchPerson from '@/bizcomponents/SearchPerson';

/**
 * 用户信息-加入的单位(公司)
 * @returns
 */
const PersonInfoCompany: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

  const confirm = (person: Person) => {
    console.log(person);
  };
  return (
    <Card>
      <div className={cls['person-info-content-header']}>
        <Title level={4}>
          <strong>我的单位</strong>
        </Title>
        <div>
          <Button type="link" onClick={showModal}>
            加入单位
          </Button>
        </div>
      </div>
      <Table dataSource={data} columns={columns} rowKey={(r) => r.id} />
      <Modal
        title="添加好友"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={550}>
        <div>
          {/* <SearchCompany></SearchCompany> */}
          <SearchPerson confirm={confirm}></SearchPerson>
        </div>
      </Modal>
    </Card>
  );
};

export default PersonInfoCompany;
