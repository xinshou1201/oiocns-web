import './index.less';

import { Pagination, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useMemo, useState } from 'react';

import { IconFont } from '@/components/IconFont';

interface PageType {
  defaultPageType?: PageShowType; //当前展示类型 card: 卡片; list: 列表
  dataSource: any[]; // 展示数据源
  columns: ColumnsType<DataType>;
  total?: number; // 总条数
  // eslint-disable-next-line no-unused-vars
  onChange?: (page: number, pageSize: number) => void; // 弹出切换页码事件
  selectMore?: boolean; //是否开启选择区域
  stripe?: boolean; // 斑马纹
  style?: React.CSSProperties; // wrap样式加载 对表格外部margin pading 等定制展示
  cardContent?: React.ReactNode;
  [key: string]: any; // 其他属性
}

const Index: React.FC<PageType> = ({
  defaultPageType,
  dataSource,
  columns,
  total,
  selectMore = false,
  stripe = false,
  style,
  onChange,
  cardContent,
  ...rest
}) => {
  const [pageType, setPageType] = useState<PageShowType>(defaultPageType || 'table');

  /**
   * @desc: 多选功能函数
   * @return {*}
   */
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    // 禁用选择功能
    // getCheckboxProps: (record: DataType) => ({
    //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
    //   name: record.name,
    // }),
  };

  /**
   * @desc: 渲染表格主体
   * @return {表格主体}
   */
  const renderTable = useMemo(() => {
    return pageType === 'table' ? (
      <Table
        className="common-table"
        bordered
        size="small"
        columns={columns}
        dataSource={dataSource}
        rowSelection={
          selectMore
            ? {
                type: 'checkbox',
                ...rowSelection,
              }
            : undefined
        }
        pagination={false}
        rowClassName={
          stripe
            ? (_record: any, index: number) => {
                return index % 2 !== 0 ? 'stripe' : '';
              }
            : ''
        }
        {...rest}
      />
    ) : (
      <div className="common-table">{cardContent}</div>
    );
  }, [pageType]);
  /**
   * @desc: 自定义表格 底部区域
   * @return {底部组件}
   */
  const renderFooter = () => {
    return (
      <div className="common-table-footer ">
        {/* 切换展示形式 */}
        <div className="btn-box">
          <IconFont
            className={pageType === 'table' ? 'active' : ''}
            type={'icon-chuangdanwei'}
            onClick={() => {
              setPageType('table');
            }}
          />
          <IconFont
            className={pageType === 'card' ? 'active' : ''}
            type={'icon-jianyingyong'}
            onClick={() => {
              setPageType('card');
            }}
          />
        </div>
        {/* 翻页功能 */}
        <Pagination
          total={total || 0}
          onChange={onChange}
          showTotal={(total: number) => `共 ${total} 条`}
          showSizeChanger
        />
      </div>
    );
  };

  return (
    <div className="common-table-wrap" style={style}>
      {renderTable} {renderFooter()}
    </div>
  );
};

export default Index;
