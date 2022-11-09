import React from 'react';
import Node from '@/bizcomponents/Flow/Node';

type ApprovalNodeProps = {
  [key: string]: any;
};

/**
 * 审批节点
 * @returns
 */
const ApprovalNode: React.FC<ApprovalNodeProps> = () => {
  return (
    <Node
      title="标题"
      showError={false}
      content="由发起人指定"
      errorInfo="错误信息"
      placeholder="请设置审批对象"
      headerBgc="#ff943e"
      headerIcon="el-icon-s-check"
    />
  );
};

export default ApprovalNode;
