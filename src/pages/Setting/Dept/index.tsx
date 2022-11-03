/* eslint-disable no-unused-vars */
import { Card, Button, Descriptions, Space } from 'antd';
import React, { useState } from 'react';
import Title from 'antd/lib/typography/Title';
import cls from './index.module.less';
import CardOrTable from '@/components/CardOrTableComp';
import { MarketTypes } from 'typings/marketType';
import { columns } from './config';
import { dataSource } from './datamock';

/**
 * 部门设置
 * @returns
 */
const SettingDept: React.FC = () => {
  const [statusKey, setStatusKey] = useState('merchandise');
  // 操作内容渲染函数
  const renderOperation = (
    item: MarketTypes.ProductType,
  ): MarketTypes.OperationType[] => {
    return [
      {
        key: 'publish',
        label: '修改信息',
        onClick: () => {
          console.log('按钮事件', 'publish', item);
        },
      },
      {
        key: 'share',
        label: '变更部门',
        onClick: () => {
          console.log('按钮事件', 'share', item);
        },
      },
      {
        key: 'detail',
        label: '岗位设置',
        onClick: () => {
          console.log('按钮事件', 'detail', item);
        },
      },
      {
        key: 'publishList',
        label: '部门设置',
        onClick: () => {
          console.log('按钮事件', 'publishList', item);
        },
      },
      {
        key: 'caption',
        label: '停用',
        onClick: () => {
          console.log('按钮事件', 'publishList', item);
        },
      },
      {
        key: 'caption1',
        label: '移出单位',
        onClick: () => {
          console.log('按钮事件', 'publishList', item);
        },
      },
    ];
  };
  // 标题tabs页
  const TitleItems = [
    {
      tab: `部门成员`,
      key: 'deptPerpeos',
    },
    {
      tab: `部门应用`,
      key: 'deptApps',
    },
  ];
  // tabs页
  const items = [
    {
      tab: `全部`,
      key: '1',
    },
    {
      tab: `已开通`,
      key: '2',
    },
    {
      tab: `未开通`,
      key: '3',
    },
  ];
  // 部门信息标题
  const title = (
    <div className={cls['company-dept-title']}>
      <div>
        <Title level={4}>部门信息</Title>
      </div>
      <div>
        <Button type="link">编辑</Button>
        <Button type="link">权限管理</Button>
      </div>
    </div>
  );
  // 部门信息内容
  const content = (
    <div className={cls['company-dept-content']}>
      <Card bordered={false}>
        <Descriptions title={title} bordered column={2}>
          <Descriptions.Item label="单位名称">浙江省财政厅</Descriptions.Item>
          <Descriptions.Item label="单位编码">1130010101010101010</Descriptions.Item>
          <Descriptions.Item label="我的岗位">浙江省财政厅-管理员</Descriptions.Item>
          <Descriptions.Item label="团队编码">zjczt</Descriptions.Item>
          <Descriptions.Item label="创建人">小明</Descriptions.Item>
          <Descriptions.Item label="创建时间">2022-11-01 11:11:37</Descriptions.Item>
          <Descriptions.Item label="描述" span={2}>
            未公示
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
  // 按钮
  const renderBtns = () => {
    return (
      <Space>
        <Button type="link" onClick={() => {}}>
          岗位设置
        </Button>
        <Button type="link">添加成员</Button>
        <Button type="link">查看申请</Button>
      </Space>
    );
  };
  //部门主体
  const deptCount = (
    <div className={`${cls['dept-wrap-pages']}`}>
      <Card tabList={TitleItems}>
        <div className={`pages-wrap flex flex-direction-col ${cls['pages-wrap']}`}>
          <Card
            title="浙江省财政厅"
            className={cls['app-tabs']}
            extra={renderBtns()}
            tabList={items}
            onTabChange={(key) => {
              setStatusKey(key);
              console.log('切换事件', key);
            }}
          />
          <div className={cls['page-content-table']}>
            <CardOrTable
              dataSource={dataSource as any}
              rowKey={''}
              operation={renderOperation}
              columns={columns as any}
              height={180}
            />
          </div>
        </div>
      </Card>
    </div>
  );
  return (
    <div className={cls[`dept-content-box`]}>
      {content}
      {deptCount}
    </div>
  );
};

export default SettingDept;
