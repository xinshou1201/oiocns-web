import './index.less';

import React from 'react';

import clas from './index.module.less';

const Register: React.FC = () => {
  // 测试 环境变量 import.meta.env
  console.log('import.meta', import.meta);
  return (
    <div>
      <h2>Register</h2>
      <div className={clas.red}>注册页面</div>
    </div>
  );
};
export default Register;
