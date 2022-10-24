import { useQuery } from '@tanstack/react-query';
import { Input } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React, { useState } from 'react';
import { Page, PageData } from '../../module/typings';
import { Company } from './../../module/org';
import companyService from './../../module/org/company';

type SearchCompanyProps = {
  filter?: string;
};

/**
 * 搜索单位(公司)
 * @returns
 */
const SearchCompany: React.FC<SearchCompanyProps> = () => {
  const [page, setPage] = useState<Page>({ page: 1, pageSize: 10 });

  const { data } = useQuery<PageData<Company>>(['company.searchCompany', page], () =>
    companyService.searchCompany(page),
  );
  const companies = data?.result || [];
  // const total = data?.total;

  console.log(data);

  // const handlePageChange = (page: Page) => {
  //   setPage(page);
  // };

  const handleInputChange = (e: any) => {
    // const page = {...page, ...}
    console.log({ page: 1, pageSize: 10, filter: e.target.value });
    setPage({ page: 1, pageSize: 10, filter: e.target.value });
  };

  const columns: ColumnsType<Company> = [
    {
      title: '单位名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '统一社会信用代码',
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

  // const paginationProps = {
  //   current: 1, //当前页码
  //   pageSize: 10, // 每页数据条数
  //   total, // 总条数
  //   onChange: (page: any) => handlePageChange(page), //改变页码的函数
  //   hideOnSinglePage: false,
  //   showSizeChanger: false,
  // };

  return (
    <>
      <Input
        placeholder="请输入统一社会信用代码"
        value={page.filter}
        onChange={handleInputChange}
      />
      <Table dataSource={companies} columns={columns} rowKey={(r) => r.id} bordered />
    </>
  );
};

export default SearchCompany;
