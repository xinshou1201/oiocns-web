import React, { useState } from 'react';
import { Card, Button, Descriptions, Space } from 'antd';
import Title from 'antd/lib/typography/Title';
import cls from './index.module.less';
import AppShowComp from '@/bizcomponents/AppTablePage';
import API from '@/services';
import MarketService from '@/module/appstore/market';

const service = new MarketService({
  nameSpace: 'publicStore',
  searchApi: API.appstore.merchandise,
  createApi: API.appstore.create,
  deleteApi: API.appstore.marketDel,
  updateApi: API.appstore.updateMarket,
});

/**
 * 集团设置
 * @returns
 */
const SettingGroup: React.FC = () => {
  const [statusKey, setStatusKey] = useState('merchandise');
  // 标题tabs页
  const TitleItems = [
    {
      tab: `集团成员`,
      key: 'deptPerpeos',
    },
  ];
  // 集团信息标题
  const title = (
    <div className={cls['company-group-title']}>
      <div>
        <Title level={4}>节点信息</Title>
      </div>
      <div>
        <Button type="link">编辑</Button>
        <Button type="link">删除</Button>
      </div>
    </div>
  );
  // 集团信息内容
  const content = (
    <div className={cls['company-group-content']}>
      <Card bordered={false}>
        <Descriptions title={title} bordered column={2}>
          <Descriptions.Item label="集团名称">浙江省财政厅</Descriptions.Item>
          <Descriptions.Item label="集团编码">1130010101010101010</Descriptions.Item>
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
          集团岗位
        </Button>
        <Button type="link">添加单位</Button>
        <Button type="link">查看申请</Button>
      </Space>
    );
  };
  //部门主体
  const deptCount = (
    <div className={`${cls['group-wrap-pages']}`}>
      <Card tabList={TitleItems}>
        <div className={`pages-wrap flex flex-direction-col ${cls['pages-wrap']}`}>
          <Card
            title="浙江省资产年报集团"
            className={cls['app-tabs']}
            extra={renderBtns()}
            onTabChange={(key) => {
              setStatusKey(key);
              console.log('切换事件', key);
            }}
          />
          <div className={cls['page-content-table']}>
            <AppShowComp service={service} searchParams={{ status: statusKey }} />
          </div>
        </div>
      </Card>
    </div>
  );
  return (
    <div className={cls[`group-content-box`]}>
      {content}
      {deptCount}
    </div>
  );
};

export default SettingGroup;
