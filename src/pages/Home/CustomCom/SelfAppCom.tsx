import './styles/selfApp.less';

import { PoweroffOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
interface SelfAppComType {
  props: []; //入口列表
}
const BannerCom: React.FC<SelfAppComType> = ({ props }) => {
  console.log('打印SelfAppCom', props);

  return (
    <>
      <div>
        <Button type="primary" icon={<PoweroffOutlined />}>
          Click me!
        </Button>
      </div>
    </>
  );
};

export default BannerCom;
