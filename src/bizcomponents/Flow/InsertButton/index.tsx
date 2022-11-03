import { Popover, Tooltip, Button  } from 'antd';
import { PlusOutlined, ShareAltOutlined, SendOutlined, ClusterOutlined, HighlightOutlined } from '@ant-design/icons';
import React from 'react';
import cls from './index.module.less';

type InsertButtonProps = {
  [key: string]: any;
};

/**
 * 插入节点 对话框
 * @returns 
 */
const InsertButton: React.FC<InsertButtonProps> = () => {
  const text = <span>添加流程节点</span>;
  const addApprovalNode = ()=>{};
  const addCcNode = ()=>{};
  const addConditionsNode = ()=>{};
  const addConcurrentsNode = ()=>{};
  const content = (
    <div className={cls[`node-select`]}>
    <div onClick= {addApprovalNode}>
    <HighlightOutlined style={{color:'rgb(255, 148, 62)',fontSize:'20px',  position:'absolute', top:'18px', left:'25px' }}/>
      <span>审批</span>
    </div>
    <div onClick={addCcNode}>
      <SendOutlined style={{color:'rgb(50, 150, 250)',fontSize:'20px', position:'absolute', top:'18px', left:'25px'}}/>
      <span>抄送</span>
    </div>
    <div onClick={addConditionsNode}>
      <ShareAltOutlined style={{color:'rgb(21, 188, 131)',fontSize:'20px', position:'absolute', top:'18px', left:'25px'}}/>
      <span>条件审核</span>
    </div>
    <div onClick={addConcurrentsNode}>
      <ClusterOutlined style={{color:'#718dff',fontSize:'20px', position:'absolute', top:'18px', left:'25px'}}/>
      <span>同时审核</span>
    </div>
  </div>
  );
  return (
    <Popover placement="bottomLeft" title={text} content={content} trigger="click" >
      <Tooltip title="添加节点" placement="right">
        <Button type="primary" shape="circle" icon={<PlusOutlined />} />
      </Tooltip>
    </Popover>
  );
};

export default InsertButton;
