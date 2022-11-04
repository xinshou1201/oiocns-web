import { Button, Modal, Table, Tabs } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Title from 'antd/lib/typography/Title';
import React, { useState, useEffect } from 'react';

import CardOrTable from '@/components/CardOrTableComp';
import { UserDept } from '@/module/org';
// import companyService from '@/module/org/company';
// import { useQuery } from '@tanstack/react-query';
import { User } from 'typings/user';

import cls from './index.module.less';
import SearchCompany from '@/bizcomponents/SearchCompany';

/**
 * 用户信息-加入的单位(公司)
 * @returns
 */
const PersonInfoCompany: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, setList] = useState<UserDept[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getTableList();
    console.log(page, total);
    setTotal(10);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const setTabName = (key: string) => {
    console.log(key);
  };

  // const { data } = useQuery<Company[]>(['company.getJoinedCompany'], () =>
  //   companyService.getJoinedCompany({ page: 1, pageSize: 1000 }),
  // );

  /**
   * @desc: 页码切换函数
   * @param {number} page
   * @param {number} pageSize
   * @return {*}
   */
  const handlePageChange = (page: number, pageSize: number) => {
    setPage(page);
    getTableList({ page, pageSize });
  };

  const tableAlertRender = (selectedRowKeys: any[], selectedRows: any[]) => {
    console.log('======', selectedRowKeys, selectedRows);
  };

  /**
   * @desc: 获取展示列表
   * @param {string} searchKey 搜索关键词
   * @param {boolean} isGofirst 是否返回第一页
   * @return {*}
   */
  const getTableList = async (req = {}, searchKey = '', isGofirst = false) => {
    // setList([...service.List]);
    // setTotal(service.Total);

    console.log(req, searchKey, isGofirst);
    let tt: UserDept[] = [
      {
        order: 1,
        deptId: '1',
        deptName: '1',
        deptDesc: '1',
        createCompany: '1',
        createCompanyId: 1,
        joinDate: '2012-10-01',
      },
      {
        order: 2,
        deptId: '2',
        deptName: '2',
        deptDesc: '2',
        createCompany: '2',
        createCompanyId: 2,
        joinDate: '2012-11-01',
      },
    ];

    setList(tt);
  };

  const columns: ColumnsType<UserDept> = [
    {
      title: '序号',
      dataIndex: 'order',
      key: 'order',
    },
    {
      title: '单位名称',
      dataIndex: 'createCompany',
      key: 'createCompany',
    },
    {
      title: '单位编码',
      dataIndex: 'createCompanyId',
      key: 'createCompanyId',
    },
    {
      title: '单位描述',
      dataIndex: 'deptDesc',
      key: 'deptDesc',
    },
  ];

  // 操作内容渲染函数
  const renderOperation = (item: UserDept): User.OperationType[] => {
    return [
      {
        key: 'publish',
        label: '上架',
        onClick: () => {
          console.log('按钮事件', 'publish', item);
        },
      },
      {
        key: 'share',
        label: '共享',
        onClick: () => {
          console.log('按钮事件', 'share', item);
        },
      },
      {
        key: 'detail',
        label: '详情',
        onClick: () => {
          console.log('按钮事件', 'detail', item);
        },
      },
      {
        key: 'publishList',
        label: '上架列表',
        onClick: () => {
          console.log('按钮事件', 'publishList', item);
        },
      },
    ];
  };

  return (
    <div className={cls['person-info-content-container']}>
      <div className={cls['person-info-content-header']}>
        <Title level={4}>
          <strong>单位设置</strong>
        </Title>
        <div>
          <Button type="link" onClick={showModal}>
            部门岗位
          </Button>
          <Button type="link" onClick={showModal}>
            查看申请记录
          </Button>
          <Button type="link" onClick={showModal}>
            加入集团
          </Button>
          <Button type="link" onClick={showModal}>
            创建组织
          </Button>
        </div>
      </div>

      <Tabs
        defaultActiveKey="1"
        onChange={(key: string) => {
          setTabName(key);
        }}
        items={[
          {
            label: `全部`,
            key: '1',
          },
          {
            label: `创建的`,
            key: '2',
          },
          {
            label: `已加入`,
            key: '3',
          },
        ]}
      />

      {/* <Table dataSource={data} columns={columns} rowKey={(r) => r.id} /> */}
      <CardOrTable
        dataSource={list}
        total={total}
        showChangeBtn={false}
        operation={renderOperation}
        columns={columns as any}
        onChange={handlePageChange}
        rowKey={'id'}
        rowSelection={{
          selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
          defaultSelectedRowKeys: [1],
        }}
        tableAlertRender={tableAlertRender}
      />

      <Modal
        title="加入单位"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={500}>
        <div>
          <SearchCompany></SearchCompany>
        </div>
      </Modal>
    </div>
  );
};

export default PersonInfoCompany;
