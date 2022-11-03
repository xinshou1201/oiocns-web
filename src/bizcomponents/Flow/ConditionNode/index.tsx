import React, { useState, useMemo } from 'react';
import InsertButton from '@/bizcomponents/Flow/InsertButton'
import  cls from './index.module.less';
import { CopyOutlined, CloseOutlined  } from '@ant-design/icons';
type ConditionNodeProps = {
  config?: any,
   _disabled?: boolean,
  level?: number,
  //条件数
  size?:number
};

/**
 * 条件节点
 * @returns 
 */
const ConditionNode: React.FC<ConditionNodeProps> = (props:ConditionNodeProps) => {
  const [showError, setShowError] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>('请设置条件');
  const content = useMemo(() => {
    const conditions = props.config.conditions
    var text = "请设置条件"
    if(conditions && conditions.length >0){
      text = ""
      for(let condition of conditions){
        text += condition.paramLabel + condition.label + (condition.valLabel || condition.val) +" 且 "
      }
      text = text.substring(0,text.lastIndexOf(' 且 '))
    }
    return text
  }, [props.config])
  const footer = (
    <div className={cls["btn"]}>
      <InsertButton></InsertButton>
    </div>
  );
  const nodeHeader = (
    <div className={cls["node-body-main-header"]}>
      <span className={cls["title"]}>{props.config.name ? props.config.name : ('条件' + props.level)}</span>
      <span className={cls["option"]}>
        <CopyOutlined />
        <CloseOutlined/>
      </span>
    </div>
  );
  const nodeContent = (
    <div className={cls["node-body-main-content"]}>
        {/* <span>并行任务（同时进行）</span> */}
        {!content && <span className={cls["placeholder"]}>{placeholder}</span>}
        {content && <span className={cls["name"]} >{content}</span>}
    </div>
  );
  return (
    <div className={`${cls["node"]} ${showError?cls["node-error-state"]:''}`}>
      <div className={`${cls["node-body"]} ${showError?cls["error"]:''}`}> 
        <div className={cls["node-body-main"]}>
            {nodeHeader}
            {nodeContent}
        </div>
      </div>
      
      <div className={cls["node-footer"]}>
        {footer}
      </div>
    </div>
  );
};

ConditionNode.defaultProps = {
  config: {},
  level: 1,
  size: 0
};

export default ConditionNode;
