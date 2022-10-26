import React, { useEffect, useState } from 'react';
import './index.less';

import CardOrTable from '@/components/CardOrTableComp';
import AppCard from '@/components/AppCardOfBuy';
import { columns } from '@/components/CardOrTableComp/config';
import MarketService from '@/module/appstore/market';
import { MarketTypes } from 'typings/marketType';
interface AppShowCompType {
  apiName: string;
  defalutKeys: { listKey: string; totalKey: string };
}

const AppShowComp: React.FC<AppShowCompType> = ({ apiName, defalutKeys }) => {
  const [list, setList] = useState<MarketTypes.ProductType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getTableList();
  }, []);

  /**
   * @desc: 获取展示列表
   * @param {string} searchKey 搜索关键词
   * @param {boolean} isGofirst 是否返回第一页
   * @return {*}
   */
  const getTableList = async (req = {}, searchKey = '', isGofirst = false) => {
    isGofirst && setPage(1);

    const params = {
      page: isGofirst ? 1 : page,
      pageSize: 10,
      filter: searchKey,
    };
    await MarketService[apiName]({ ...params, ...req });

    setList([...MarketService[defalutKeys.listKey]]);
    setTotal(MarketService[defalutKeys.totalKey]);
  };

  /**
   * @desc: 页码切换函数
   * @param {number} page
   * @param {number} pageSize
   * @return {*}
   */
  const handlePageChange = (page: number, pageSize: number) => {
    console.log('搜索', page, pageSize);
    setPage(page);
    getTableList({ page, pageSize });
  };

  /**
   * @desc: 处理购买 函数
   * @param {'buy' | 'join'} type
   * @param {MarketTypes.ProductType} selectItem
   * @return {*}
   */
  const handleBuyAppFun = (type: 'buy' | 'join', selectItem: any) => {
    console.log('购买', type, selectItem.name, selectItem.id);
  };
  // 操作内容渲染函数
  const renderOperation = (
    item: MarketTypes.ProductType,
  ): MarketTypes.OperationType[] => {
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

  /**
   * @desc:卡片内容渲染函数
   * @param {MarketTypes.ProductType[]} dataArr
   * @return {*}
   */
  const renderCardFun = (dataArr: MarketTypes.ProductType[]): React.ReactNode[] => {
    return dataArr.map((item: any) => {
      return (
        <AppCard
          className="card"
          data={item}
          key={item.id}
          operation={renderOperation}
          handleBuyApp={handleBuyAppFun}
        />
      );
    });
  };
  return (
    <div className="app-wrap">
      <CardOrTable
        dataSource={list}
        total={total}
        renderCardContent={renderCardFun}
        operation={renderOperation}
        columns={columns as any}
        onChange={handlePageChange}
        rowKey={'id'}
      />
    </div>
  );
};

export default AppShowComp;
