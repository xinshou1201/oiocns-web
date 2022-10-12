import { Avatar } from 'antd';
import React from 'react';

import logo from '@/assets/imgs/logo.png';

const Logo: React.FC<{ size: number }> = ({ size = 120 }) => (
  <Avatar size={size} src={logo} />
);

export default Logo;
