import React, { useEffect, useRef, useState } from 'react';
import cls from './index.module.less';

import CardOrTable from '@/components/CardOrTableComp';
import AppCard from '@/components/AppCardComp';
import { columns } from '@/components/CardOrTableComp/config';
import { MarketTypes } from 'typings/marketType';
import { IdPage } from '@/module/typings';
import { MarketServiceType } from '@/module/appstore/market';
import { sleep } from '@/store/sleep';
interface AppShowCompType {
  service: MarketServiceType;
  searchParams: {};
}
const AppShowComp: React.FC<AppShowCompType> = ({ service, searchParams }) => {
  const [list, setList] = useState<MarketTypes.ProductType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const parentRef = useRef<any>(null); //父级容器Dom

  useEffect(() => {
    getTableList();
  }, []);
  useEffect(() => {
    getTableList(searchParams, '', true);
  }, [searchParams]);
  /**
   * @desc: 获取展示列表
   * @param {string} searchKey 搜索关键词
   * @param {boolean} isGofirst 是否返回第一页
   * @return {*}
   */
  const getTableList = async (req = {}, searchKey = '', isGofirst = false) => {
    if (isGofirst) {
      setPage(1);
    }
    if (!service.PUBLIC_STORE.id) {
      // 防止页面刷新时,数据请求缓慢造成数据缺失问题
      await sleep(100);
    }

    const params = {
      id: service.PUBLIC_STORE.id,
      page: isGofirst ? 1 : page,
      pageSize: 10,
      filter: searchKey,
    };

    await service.getList<IdPage>({ ...params, ...req });
    setList([...service.List]);
    setTotal(service.Total);
  };

  /**
   * handlePageChage
   */
  const handlePageChange = (page: number, pageSize: number) => {
    setPage(page);
    getTableList({ page, pageSize });
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
  // 卡片内容渲染函数
  const renderCardFun = (dataArr: MarketTypes.ProductType[]): React.ReactNode[] => {
    return dataArr.map((item: MarketTypes.ProductType) => {
      return (
        <AppCard
          className="card"
          data={item}
          key={item.id}
          defaultKey={{
            name: 'caption',
            size: 'price',
            type: 'sellAuth',
            desc: 'remark',
            creatTime: 'createTime',
          }}
          operation={renderOperation}
        />
      );
    });
  };
  return (
    <div className={cls['app-wrap']} ref={parentRef}>
      <CardOrTable<MarketTypes.ProductType>
        dataSource={list}
        total={total}
        page={page}
        parentRef={parentRef}
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
