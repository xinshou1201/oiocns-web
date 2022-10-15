import './index.less';

import { PoweroffOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import CardWidthTitle from '@/components/CardWidthTitle';
interface SelfAppComType {
  props: []; //入口列表
}
const BannerCom: React.FC<SelfAppComType> = ({ props }) => {
  console.log('打印SelfAppCom', props);

  return (
    <CardWidthTitle className="self-app" title={'我的应用'}>
      <Button type="primary" icon={<PoweroffOutlined />}>
        Click me!
      </Button>
    </CardWidthTitle>
  );
};

export default BannerCom;
