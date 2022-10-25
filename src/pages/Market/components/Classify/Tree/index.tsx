import {
  EllipsisOutlined,
  LeftCircleOutlined,
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Dropdown, Input, Menu, Tree } from 'antd';
import type { DataNode, TreeProps } from 'antd/es/tree';
import React, { useState } from 'react';

import cls from './index.module.less';

const x = 3;
const y = 2;
const z = 1;
const defaultData: DataNode[] = [];
// 树形控件 更多操作
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: '重命名',
      },
      {
        key: '2',
        label: '创建副本',
      },
      {
        key: '3',
        label: '拷贝链接',
      },
      {
        key: '4',
        label: '移动到',
      },
      {
        key: '5',
        label: '收藏',
      },
      {
        key: '6',
        label: '删除',
      },
    ]}
  />
);

const generateData = (_level: number, _preKey?: React.Key, _tns?: DataNode[]) => {
  const preKey = _preKey || '0';
  const tns = _tns || defaultData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const StoreClassifyTree: React.FC = () => {
  const [gData, setGData] = useState(defaultData);
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);

  const onDragEnter: TreeProps['onDragEnter'] = (info) => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // setExpandedKeys(info.expandedKeys)
  };

  const onDrop: TreeProps['onDrop'] = (info) => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (
      data: DataNode[],
      key: React.Key,
      // eslint-disable-next-line no-unused-vars
      callback: (node: DataNode, i: number, data: DataNode[]) => void,
    ) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children!, key, callback);
        }
      }
    };
    const data = [...gData];

    // Find dragObject
    let dragObj: DataNode;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else if (
      ((info.node as any).props.children || []).length > 0 && // Has children
      (info.node as any).props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
        // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      });
    } else {
      let ar: DataNode[] = [];
      let i: number;
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i!, 0, dragObj!);
      } else {
        ar.splice(i! + 1, 0, dragObj!);
      }
    }
    setGData(data);
  };
  const renderTreeTitle = (node: any) => {
    return (
      <div className={cls.treeTitleBox}>
        <div>{node.title}</div>
        <div onClick={(e: any) => e.stopPropagation()}>
          <PlusOutlined className={cls.titleIcon} />
          <Dropdown overlay={menu} placement="bottom" trigger={['click']}>
            <EllipsisOutlined className={cls.titleIcon} rotate={90} />
          </Dropdown>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={cls.title}>全部分类</div>
      <div className={cls.title}>
        <Input size="small" prefix={<SearchOutlined />} placeholder="搜索分类" />
      </div>
      <Tree
        className="draggable-tree"
        switcherIcon={<LeftCircleOutlined />}
        titleRender={renderTreeTitle}
        defaultExpandedKeys={expandedKeys}
        draggable
        blockNode
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        treeData={gData}
      />
    </div>
  );
};

export default StoreClassifyTree;
