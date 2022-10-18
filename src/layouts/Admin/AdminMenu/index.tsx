import React from 'react';
import { Menu } from 'antd';
import Icon from '@ant-design/icons';

type PageMemuProps = {
  bottomMenu: any;
  location: any;
};
const menuTestDate = [
  {
    name: '办事',
    children: [
      { name: '好友申请', path: '1' },
      { name: '单位审核', path: '2' },
      { name: '商店审核', path: '3' },
      { name: '订单审核', path: '4' },
    ],
  },
];
const PageMemu: React.FC<PageMemuProps> = (props) => {
  const { bottomMenu } = props;
  return (
    <div>
      <div>
        <Icon></Icon>
        页面标题
      </div>
      <Menu item={menuTestDate[0].children}>
        <Menu.Item>菜单项一</Menu.Item>
        <Menu.Item>菜单项二</Menu.Item>
      </Menu>
      {bottomMenu}
    </div>
  );
};
export default PageMemu;
