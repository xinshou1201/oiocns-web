import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import React from 'react';
import { Person } from '../../module/org/index';

import personService from '../../module/org/person';

const columns: ProColumns<Person>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
  },
  {
    title: '账号',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '昵称',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '姓名',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '手机',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '座右铭',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '单位描述',
    dataIndex: 'remark',
    key: 'remark',
  },
];

/**
 * 搜索人员
 * @returns
 */
const SearchPerson: React.FC = () => {
  return (
    <ProTable<Person>
      columns={columns}
      request={(params) => personService.searchPerson(params)}
      search={false}
      rowKey="key"
      options={{
        search: true,
      }}
      headerTitle="搜索用户"
    />
  );
};

export default SearchPerson;
