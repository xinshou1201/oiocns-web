import React from 'react';
import InsertButton from '@/bizcomponents/Flow/InsertButton';
import cls from './index.module.less';
type ConcurrentNodeProps = {
  config?: any;
  _disabled?: boolean;
  level?: number;
  //条件数
  size?: number;
};

/**
 * 并行节点
 * @returns
 */
const ConcurrentNode: React.FC<ConcurrentNodeProps> = (props: ConcurrentNodeProps) => {
  const footer = (
    <div className={cls['btn']}>
      <InsertButton></InsertButton>
    </div>
  );
  const nodeHeader = (
    <div className={cls['node-body-main-header']}>
      <span className={cls['title']}>
        <i className={cls['el-icon-s-operation']}></i>
        <span className={cls['name']}>
          {props.config.name ? props.config.name : '并行任务' + props.level}
        </span>
      </span>
    </div>
  );
  const nodeContent = (
    <div className={cls['node-body-main-content']}>
      <span>并行任务（同时进行）</span>
    </div>
  );
  return (
    <div className={cls['node']}>
      <div className={cls['node-body']}>
        <div className={cls['node-body-main']}>
          {nodeHeader}
          {nodeContent}
        </div>
      </div>

      <div className={cls['node-footer']}>{footer}</div>
    </div>
  );
};

ConcurrentNode.defaultProps = {
  config: {},
  level: 1,
  size: 0,
};

export default ConcurrentNode;
