import { EllipsisOutlined } from '@ant-design/icons';
import { Avatar, Tag, Dropdown, Menu } from 'antd';
import React from 'react';
import './index.less';
import AppLogo from '@/assets/img/appLogo.png';
interface defaultObjType {
  name: string;
  size: number | string;
  type: string;
  desc: string;
  creatTime: string | number;
}

interface AppCardType {
  data: any; //props
  className?: string;
  cusProps?: defaultObjType; // 卡片字段 对应数据字段
  // eslint-disable-next-line no-unused-vars
  onClick?: (event?: any) => void;
}
const defaultObj = {
  name: 'name',
  size: 'size',
  type: 'type',
  desc: 'desc',
  creatTime: 'creatTime',
};
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
const AppCardComp: React.FC<AppCardType> = ({ className, data, cusProps, onClick }) => {
  const {
    name = 'name',
    size = 'size',
    type = 'type',
    desc = 'desc',
    creatTime = 'creatTime',
  } = { ...defaultObj, ...cusProps };
  const Title = () => {
    return (
      <div className="card-title flex" onClick={onClick}>
        <div className="card-title-left">
          <Avatar className="card-title-left-logo" size={50} src={AppLogo} />
          <div className="card-title-left-info">
            <div className="app-name">
              <span className="app-name-label">{data[name]}</span>
              <Tag color="success">{data[type] || '暂无'}</Tag>
            </div>
            <span className="app-size">{data[size]}MB</span>
          </div>
        </div>
        <Dropdown className="card-title-extra" overlay={menu} placement="bottom">
          <EllipsisOutlined rotate={90} />
        </Dropdown>
      </div>
    );
  };

  return (
    <div className={`customCardWrap ${className}`}>
      <Title />
      <ul className="card-content">
        <li className="card-content-desc con">
          {data[desc]}
          测试描述文字测试描述文字测试描述文字测试描述文字测试描述文字
        </li>
        <li className="card-content-type con">
          <Tag>测试</Tag>
        </li>
        <li className="card-content-date">创建于 {data[creatTime]}</li>
      </ul>
    </div>
  );
};

export default AppCardComp;
