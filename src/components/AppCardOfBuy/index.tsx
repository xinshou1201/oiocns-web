import React from 'react';
import { CheckCard } from '@ant-design/pro-components';
import { Button, Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import cls from './index.module.less';

interface indexType {
  className?: string;
  showBtn?: boolean; //是否展示按钮
  shouOperation?: boolean; //是否展示 右上角操作按钮
}

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: '按钮1',
      },
      {
        key: '2',
        label: '按钮2',
      },
      {
        key: '3',
        label: '按钮3',
      },
    ]}
  />
);
const Index: React.FC<indexType> = (props) => {
  const { className, showBtn = true, shouOperation = false } = props;
  console.log('打印index', props, shouOperation);

  function renderName() {
    return (
      <>
        <h3 className={cls.nameLabel}>应用名称</h3>
        <Dropdown overlay={menu} placement="bottom">
          <EllipsisOutlined className={cls.operationBtn} />
        </Dropdown>
      </>
    );
  }
  function renderDesc() {
    return (
      <div>
        <p>选择一个由流程编排提供的典型用户案例，可以从。</p>
        {showBtn ? (
          <p className={cls.btnBox}>
            <Button className={cls.btn} shape="round">
              加入购物车
            </Button>
            <Button className={cls.btn} shape="round">
              获取
            </Button>
          </p>
        ) : (
          ''
        )}
      </div>
    );
  }
  function renderTitle() {
    return (
      <div className={cls.cardTitle}>
        <img
          style={{ width: 60, height: 60 }}
          src="https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
          alt=""
        />
        <span className={cls.version}>V 0.0.1</span>
      </div>
    );
  }

  return (
    <>
      <CheckCard
        avatar={renderTitle()}
        title={renderName()}
        className={`${cls.buyCard} ${className}`}
        description={renderDesc()}
        onClick={() => {
          console.log('clicked');
        }}></CheckCard>
    </>
  );
};

export default Index;
