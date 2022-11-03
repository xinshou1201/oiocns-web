
import React from 'react';
import Node from '@/bizcomponents/Flow/Node';

type CcNodeProps = {
  [key: string]: any;
};

/**
 * 抄送节点
 * @returns 
 */
const CcNode: React.FC<CcNodeProps> = () => {
  return (
    <Node title="标题"  showError={false} content="" errorInfo="错误信息" placeholder="请设置抄送对象" headerBgc="#3296fa" headerIcon="el-icon-s-promotion" />
  );
};

export default CcNode;
