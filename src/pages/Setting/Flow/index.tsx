import { Card } from 'antd';
import React from 'react';
import cls from './index.module.less';
import RootNode from '@/bizcomponents/Flow/RootNode'
import ApprovalNode from '@/bizcomponents/Flow/ApprovalNode'
import CcNode from '@/bizcomponents/Flow/CcNode'
import ConcurrentNode from '@/bizcomponents/Flow/ConcurrentNode'
import ConditionNode from '@/bizcomponents/Flow/ConditionNode'
/**
 * 流程设置
 * @returns
 */
const SettingFlow: React.FC = () => {
  const content = (
    <div className={cls['company-info-content']}>
      <Card bordered={false}>
          <RootNode></RootNode>
          <ApprovalNode></ApprovalNode>
          <CcNode></CcNode>
          <ConcurrentNode></ConcurrentNode>
          <ConditionNode></ConditionNode>
      </Card>
    </div>
  );
  return <Card>{content}</Card>;
};

export default SettingFlow;
