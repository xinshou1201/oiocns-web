import { EllipsisOutlined } from '@ant-design/icons';
import { Avatar, Tag } from 'antd';
import React from 'react';
import './index.less';
import AppLogo from '@/assets/img/appLogo.png';

interface AppCardType {
  data: any; //props
  className?: string;
}
const AppCardComp: React.FC<AppCardType> = ({ className, data }) => {
  const Title = () => {
    return (
      <div className="card-title flex">
        <div className="card-title-left">
          <Avatar className="card-title-left-logo" size={50} src={AppLogo} />
          <div className="card-title-left-info">
            <div className="app-name">
              <span className="app-name-label">{data.name}</span>
              <Tag color="success">公开</Tag>
            </div>
            <span className="app-size">73M</span>
          </div>
        </div>
        <div className="card-title-extra">
          <EllipsisOutlined rotate={90} />
        </div>
      </div>
    );
  };

  return (
    <div className={`customCardWrap ${className}`}>
      <Title />
      <ul className="card-content">
        <li className="card-content-desc con">
          测试描述文字测试描述文字测试描述文字测试描述文字测试描述文字
        </li>
        <li className="card-content-type con">
          <Tag>测试</Tag>
        </li>
        <li className="card-content-date">创建于 2021-01-01</li>
      </ul>
    </div>
  );
};

export default AppCardComp;
