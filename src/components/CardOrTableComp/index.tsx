import React, { useMemo, useState } from 'react';
import type { ProColumns } from '@ant-design/pro-components';
/* eslint-disable no-unused-vars */
import './index.less';

import { Dropdown, Menu, Pagination } from 'antd';
import { ProTable } from '@ant-design/pro-components';

import { IconFont } from '@/components/IconFont';
import { EllipsisOutlined } from '@ant-design/icons';

interface PageType {
  defaultPageType?: PageShowType; //当前展示类型 card: 卡片; list: 列表
  dataSource: any[]; // 展示数据源
  columns: ProColumns<DataType>[];
  rowKey: string | Function;
  total?: number; // 总条数
  onChange?: (page: number, pageSize: number) => void; // 弹出切换页码事件
  stripe?: boolean; // 斑马纹
  style?: React.CSSProperties; // wrap样式加载 对表格外部margin pading 等定制展示
  renderCardContent?: (
    data: Pick<PageType, 'dataSource'>['dataSource'], //保持与dataSource 类型一致
  ) => React.ReactNode;
  [key: string]: any; // 其他属性
}

const Index: React.FC<PageType> = ({
  defaultPageType,
  dataSource,
  columns,
  rowKey,
  total,
  stripe = false,
  style,
  onChange,
  renderCardContent,
  ...rest
}) => {
  const [pageType, setPageType] = useState<PageShowType>(defaultPageType || 'table');
  const menu = (
    <Menu
      items={[
        {
          label: '1st menu item',
          key: '1',
        },
        {
          label: '2nd menu item',
          key: '2',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ]}
    />
  );
  /**
   * @desc: 渲染表格主体
   * @return {表格主体}
   */
  const resetColumns: ProColumns<DataType>[] = useMemo(() => {
    return [
      ...columns,
      {
        title: '操作',
        width: 80,
        key: 'option',
        valueType: 'option',
        fixed: 'right',
        render: () => [
          <Dropdown
            className="operation-btn"
            openClassName="test"
            overlay={menu}
            key="ss">
            <EllipsisOutlined />
          </Dropdown>,
        ],
      },
    ];
  }, [columns]);
  const renderTable = useMemo(() => {
    return pageType === 'table' ? (
      <ProTable
        className="common-table"
        columns={resetColumns}
        bordered
        dataSource={dataSource}
        // scroll={{ x: 1300 }}
        options={false}
        search={false}
        rowKey="key"
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
      <div className="common-card">
        {renderCardContent && renderCardContent(dataSource)}
      </div>
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
