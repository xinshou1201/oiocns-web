import { ProColumns, ProTable } from '@ant-design/pro-components';
import React from 'react';
import { Company } from '@/module/org';
import CompanyServices from '@/module/org/company';
import styles from './index.module.less';
type CompanySearchTableProps = {
  [key: string]: any;
};
/* 
  弹出框表格查询
*/
const CompanySearchTable: React.FC<CompanySearchTableProps> = () => {
  // 弹出搜索框的表头数据配置
  const columns: ProColumns<Company>[] = [
    {
      title: '序号',
      width: 90,
      valueType: 'index',
    },

    {
      dataIndex: 'name',
      title: '单位名称',
      width: 200,
      hideInSearch: true,
    },
    {
      dataIndex: 'code',
      title: '统一社会信用代码',
      width: 200,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入单位编码再搜索',
          },
        ],
      },
      // hideInSearch: true,
    },
    {
      dataIndex: 'remark',
      title: '单位简介',
      hideInSearch: true,
      render: (_, { team }) => {
        return team.remark;
      },
    },
  ];
  return (
    <ProTable<Company>
      columns={columns}
      rowKey="id"
      options={false}
      search={{ labelWidth: 'auto', span: 12 }}
      form={{
        ignoreRules: false,
      }}
      className={styles[`search-table`]}
      request={async (params) => {
        if (!params?.code) return { success: false };
        const { data, success, total } = await CompanyServices.searchCompany({
          filter: params?.code,
          page: params.current || 1,
          pageSize: params.pageSize || 20,
        });
        return { data, success, total };
      }}
    />
  );
};
export default CompanySearchTable;
