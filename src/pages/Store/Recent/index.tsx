import { EllipsisOutlined } from '@ant-design/icons';
import { CheckCard } from '@ant-design/pro-components';
import { Dropdown, Menu, message } from 'antd';
import React from 'react';

import cls from './index.module.less';

const items = [
  {
    id: 1,
    avatar:
      'https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg',
    title: '示例一',
    description:
      '选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。',
  },
  {
    id: 6,
    avatar:
      'https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg',
    title: '示例一',
    description:
      '选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。',
  },
  {
    id: 2,
    avatar:
      'https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg',
    title: '示例一',
    description:
      '选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。',
  },
  {
    id: 3,
    avatar:
      'https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg',
    title: '示例一',
    description:
      '选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。',
  },
  {
    id: 4,
    avatar:
      'https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg',
    title: '示例一',
    description:
      '选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。',
  },
  {
    id: 5,
    avatar:
      'https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg',
    title: '示例一',
    description:
      '选择一个由流程编排提供的典型用户案例，可以从中学习到流程编排很多设计理念。',
  },
];

const StoreRecent = () => {
  return (
    <div className={cls.cardContainer}>
      {items.map((item) => {
        return (
          <CheckCard
            className={cls.card}
            key={item.id}
            avatar={item.avatar}
            title={item.title}
            description={item.description}
            extra={
              <Dropdown
                placement="topCenter"
                overlay={
                  <Menu
                    onClick={({ domEvent }) => {
                      domEvent.stopPropagation();
                      message.info('menu click');
                    }}
                    items={[
                      {
                        label: '菜单',
                        key: '1',
                      },
                      {
                        label: '列表',
                        key: '2',
                      },
                      {
                        label: '表单',
                        key: '3',
                      },
                    ]}
                  />
                }>
                <EllipsisOutlined
                  style={{ fontSize: 22, color: 'rgba(0,0,0,0.5)' }}
                  onClick={(e) => e.stopPropagation()}
                />
              </Dropdown>
            }></CheckCard>
        );
      })}
    </div>
  );
};

export default StoreRecent;
