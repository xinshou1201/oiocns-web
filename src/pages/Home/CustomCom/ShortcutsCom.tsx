import './styles/shortcuts.less';

import { Button } from 'antd';
import React from 'react';
interface ShortcutsComType {
  props: []; //入口列表
}
const BannerCom: React.FC<ShortcutsComType> = ({ props }) => {
  console.log('打印ShortcutsCom', props);

  return (
    <>
      <Button>按钮</Button>
    </>
  );
};

export default BannerCom;
