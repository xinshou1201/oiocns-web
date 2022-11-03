import { Card, Form, Modal } from 'antd';
import React, { useState } from 'react';
import API from '@/services';
import AppShowComp from '@/bizcomponents/AppTablePage';
import MarketService from '@/module/appstore/market';
import cls from './index.module.less';
import { useHistory } from 'react-router-dom';
import { BtnGroupDiv } from '@/components/CommonComp';
import PutawayComp from '../components/PutawayModal';

const service = new MarketService({
  nameSpace: 'myApp',
  searchApi: API.product.searchOwnProduct,
  createApi: API.product.register,
  deleteApi: API.product.delete,
  updateApi: API.product.update,
});

import StoreRecent from '../components/Recent';

const StoreApp: React.FC = () => {
  const history = useHistory();
  const [statusKey, setStatusKey] = useState('merchandise');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [putawayForm] = Form.useForm();

  const items = [
    {
      tab: `全部`,
      key: '1',
    },
    {
      tab: `创建的`,
      key: '2',
    },
    {
      tab: `购买的`,
      key: '3',
    },
    {
      tab: `共享的`,
      key: '4',
    },
    {
      tab: `分配的`,
      key: '5',
    },
  ];

  const BtnsList = ['购买', '创建', '暂存'];
  const handleBtnsClick = (item: { text: string }) => {
    // console.log('按钮点击', item);
    switch (item.text) {
      case '购买':
        history.push('/market/app');
        break;
      case '创建':
        console.log('点击事件', '创建');
        break;
      case '暂存':
        console.log('点击事件', '暂存');
        setShowModal(true);
        break;
      default:
        console.log('点击事件未注册', item.text);
        break;
    }
  };
  const handlePutawaySumbit = () => {
    const searchData = putawayForm.getFieldsValue();
    console.log('searchData', searchData);

    // setShowModal(false);
  };

  return (
    <div className={`pages-wrap flex flex-direction-col ${cls['pages-wrap']}`}>
      {<StoreRecent />}
      <Card
        title="应用"
        className={cls['app-tabs']}
        extra={<BtnGroupDiv list={BtnsList} onClick={handleBtnsClick} />}
        tabList={items}
        onTabChange={(key) => {
          setStatusKey(key);
        }}
      />
      <div className={cls['page-content-table']}>
        <AppShowComp
          service={service}
          searchParams={{ status: statusKey }}
          columns={service.getMyappColumns()}
        />
      </div>
      <Modal
        title="弹出层"
        width={670}
        destroyOnClose={true}
        open={showModal}
        bodyStyle={{ padding: 0 }}
        okText="确定"
        onOk={() => {
          handlePutawaySumbit();
        }}
        onCancel={() => {
          console.log(`取消按钮`);
          setShowModal(false);
        }}>
        <PutawayComp initialValues={{}} form={putawayForm} />
      </Modal>
    </div>
  );
};

export default StoreApp;
