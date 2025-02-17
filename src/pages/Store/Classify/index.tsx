// import {
//   AppstoreOutlined,
//   DatabaseOutlined,
//   FileTextOutlined,
//   FundOutlined,
// } from '@ant-design/icons';
import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import SearchSjopComp from '@/bizcomponents/SearchShop';
import cls from './index.module.less';
import StoreClassifyTree from '@/components/CustomTreeComp';
import CloudTreeComp from '@/components/CloudTreeComp';
import API from '@/services';
// import { MarketTypes } from 'typings/marketType';
import CommonClass from '@/module/commonClass/BaseServiceClass';
import { Page } from '@/module/typings';

import JsonFrom from '@/bizcomponents/JsonFrom';
import { useLocation } from 'react-router-dom';

const Service = new CommonClass({
  nameSpace: 'shopTree',
  searchApi: API.market.searchOwn,
});
// const items = [
//   { label: '应用', key: 'app', icon: <AppstoreOutlined /> }, // 菜单项务必填写 key
//   { label: '文档', key: 'doc', icon: <FileTextOutlined /> },
//   { label: '数据', key: 'data', icon: <FundOutlined /> },
//   { label: '资源', key: 'src', icon: <DatabaseOutlined /> },
// ];

const menu = ['重命名', '创建副本', '拷贝链接', '移动到', '收藏', '删除'];
const StoreClassify: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [list, setList] = useState<any[]>([]);
  const location = useLocation();
  const router = `${location.pathname}${location.search}`;
  // const [total, setTotal] = useState<number>(0);
  // const history = useHistory();
  useEffect(() => {
    getTreeList();
  }, []);
  useEffect(() => {
    console.log('3211232131', router);
  }, [router]);

  const getTreeList = async (req = {}, searchKey = '') => {
    const params = {
      page: 1,
      pageSize: 100,
      filter: searchKey,
    };

    await Service.getList<Page>({ ...params, ...req });
    setList(
      Service.List.map((item, index) => {
        return {
          title: item.name,
          key: `0-${index}`,
          id: item.id,
          children: [],
        };
      }),
    );
    // setTotal(Service.Total);
    console.log(
      'ssss',
      Service.List.map((item, index) => {
        return {
          title: item.name,
          key: `0-${index}`,
          id: item.id,
          children: [],
        };
      }),
    );
  };

  //菜单跳转
  // const goPage = (e: any) => {
  //   history.push(`/store/${e.key}`);
  // };
  const handleAddShop = (item: any) => {
    console.log('handleAddShop', item);
    setOpen(true);
  };
  const handleMenuClick = ({ data, key }: { data: any; key: string }) => {
    console.log('handleMenuClick', data, key);
  };

  return (
    <>
      <div className={cls.container}>
        {/* <div> */}
        {/* <div className={cls.subTitle}>常用分类</div>
          <Menu items={items} onClick={goPage} /> */}
        {router == '/store/doc' ? (
          <CloudTreeComp></CloudTreeComp>
        ) : (
          <StoreClassifyTree
            menu={menu}
            searchable
            draggable
            treeData={list}
            handleAddClick={handleAddShop}
            handleMenuClick={handleMenuClick}
          />
        )}
        {/* </div> */}
      </div>
      <Modal
        title="搜索商店"
        width={670}
        destroyOnClose={true}
        open={showModal}
        bodyStyle={{ padding: 0 }}
        okText="确定加入"
        onOk={() => {
          console.log(`确定按钮`);
          setShowModal(false);
        }}
        onCancel={() => {
          console.log(`取消按钮`);
          setShowModal(false);
        }}>
        <SearchSjopComp />
      </Modal>
      <JsonFrom open={open} setOpen={setOpen} JsonColumns={[]} />
    </>
  );
};

export default StoreClassify;
