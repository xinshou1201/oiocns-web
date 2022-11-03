
import React from 'react';
import Node from '@/bizcomponents/Flow/Node';

type RootNodeProps = {
  [key: string]: any;
};

/**
 * 开始节点
 * @returns 
 */
const RootNode: React.FC<RootNodeProps> = () => {
  return (
    <Node title="发起人" isRoot={true} showError={false} content="" errorInfo="错误信息" placeholder="所有人" headerBgc="#576a95" headerIcon="el-icon-user-solid" />
  );
};

export default RootNode;
