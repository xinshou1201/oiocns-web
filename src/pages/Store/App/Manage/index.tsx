import { Button, Card, Dropdown, Menu } from 'antd';
import React from 'react';
import cls from './index.module.less';
import { BtnGroupDiv } from '@/components/CommonComp';
import { EllipsisOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import { IconFont } from '@/components/IconFont';
import Appimg from '@/assets/img/appLogo.png';

import { useHistory } from 'react-router-dom';

interface AppInfoType {
  appId: string;
}

const StoreAppInfo: React.FC<AppInfoType> = () => {
  const BtnsList = ['编辑应用分配'];
  const history = useHistory();
  const handleBtnsClick = (item: { text: string }) => {
    // console.log('按钮点击', item);
    switch (item.text) {
      case '编辑应用分配':
        console.log('编辑应用分配编辑应用分配');

        break;
      default:
        console.log('点击事件未注册', item.text);
        break;
    }
  };

  const menu = (
    <Menu>
      <Menu.Item>退订</Menu.Item>
      <Menu.Item>菜单项二</Menu.Item>
    </Menu>
  );
  return (
    <div className={`pages-wrap flex flex-direction-col ${cls['pages-wrap']}`}>
      <Card
        title={
          <IconFont
            type="icon-jiantou-left"
            className={cls.RouterBackBtn}
            onClick={() => {
              history.goBack();
            }}
          />
        }
        className="app-info"
        extra={<BtnGroupDiv list={BtnsList} onClick={handleBtnsClick} />}>
        <Meta
          title="应用名称"
          avatar={<img className="appLogo" src={Appimg}></img>}
          description={
            <div className="app-info-con">
              <p className="app-info-con-desc">
                应用描述应用描述应用描述应用描述应用描述应用描述
              </p>
              <p className="app-info-con-txt">
                <span className="vision">版本号 ：2.3.16</span>
                <span className="lastTime">订阅到期时间 ：2025-12-12</span>
                <span className="linkman">遇到问题? 联系运维</span>
              </p>
            </div>
          }
        />
        <div className="btns">
          <Button className="btn" type="primary" shape="round">
            续费
          </Button>
          <Dropdown overlay={menu} placement="bottom">
            <EllipsisOutlined
              style={{ fontSize: '20px', marginLeft: '10px', cursor: 'pointer' }}
              rotate={90}
            />
          </Dropdown>
        </div>
      </Card>
    </div>
  );
};

export default StoreAppInfo;
