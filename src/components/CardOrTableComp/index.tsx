import React, { useMemo, useState } from 'react';
import type { ProColumns } from '@ant-design/pro-components';
/* eslint-disable no-unused-vars */
import './index.less';

import { Dropdown, Menu, Pagination } from 'antd';
import { ProTable } from '@ant-design/pro-components';

import { IconFont } from '@/components/IconFont';
import { EllipsisOutlined } from '@ant-design/icons';
import { MarketTypes } from 'typings/marketType';

interface PageType {
  dataSource: MarketTypes.ProductType[]; // 展示数据源
  rowKey: string; //唯一key
  defaultPageType?: PageShowType; //当前展示类型 card: 卡片; list: 列表
  showChangeBtn?: boolean; //是否展示 图列切换按钮
  hideOperation?: boolean; //是否展示 默认操作区域
  columns?: ProColumns<any, 'text'>[]; //表格头部数组
  total?: number; // 总条数 总数量
  page?: number; // 当前页
  stripe?: boolean; // 斑马纹
  style?: React.CSSProperties; // wrap样式加载 对表格外部margin pading 等定制展示
  onChange?: (page: number, pageSize: number) => void; // 弹出切换页码事件
  operation?: (item: MarketTypes.ProductType) => MarketTypes.OperationType[]; //操作区域数据
  renderCardContent?: (
    dataArr: MarketTypes.ProductType[], //渲染卡片样式 Data保持与dataSource 类型一致;或者直接传进展示组件
  ) => React.ReactNode | React.ReactNode[];
  [key: string]: any; // 其他属性方法
}

const Index: React.FC<PageType> = ({
  defaultPageType,
  showChangeBtn = true,
  dataSource = [],
  columns = [],
  rowKey,
  hideOperation = false,
  operation,
  total,
  page,
  stripe = false,
  style,
  onChange,
  renderCardContent,
  ...rest
}) => {
  const [pageType, setPageType] = useState<PageShowType>(defaultPageType || 'table');

  /**
   * @desc: 操作按钮区域
   * @param {any} item - 表格单条数据 data
   * @return {Menu} - 渲染 按钮组
   */
  const menu = (item: any) => {
    return <Menu items={operation && operation(item)} />;
  };

  /**
   * @desc: 渲染表格主体
   * @return {表格主体}
   */
  const resetColumns: ProColumns<any>[] = useMemo(() => {
    return [
      ...columns,
      {
        title: '操作',
        width: 80,
        key: 'option',
        valueType: 'option',
        fixed: 'right',
        render: (_text, record) => [
          <Dropdown className="operation-btn" overlay={menu(record)} key="key">
            <EllipsisOutlined />
          </Dropdown>,
        ],
      },
    ];
  }, [columns]);
  // 表格主体 卡片与表格切换功能--增加缓存
  const renderTable = useMemo(() => {
    return pageType === 'table' ? (
      <ProTable<MarketTypes.ProductType>
        className="common-table"
        columns={hideOperation ? columns : resetColumns}
        bordered
        dataSource={dataSource}
        // scroll={{ x: 1300 }}
        options={false}
        search={false}
        rowKey={rowKey || 'key'}
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
  }, [pageType, dataSource]);
  /**
   * @desc: 自定义表格 底部区域
   * @return {底部组件}
   */
  const renderFooter = () => {
    return (
      <div className="common-table-footer ">
        {/* 切换展示形式 */}
        <div className="btn-box">
          {showChangeBtn ? (
            <>
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
            </>
          ) : (
            ''
          )}
        </div>
        {/* 翻页功能 */}
        <Pagination
          total={total || 0}
          onChange={onChange}
          current={page || 1}
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
