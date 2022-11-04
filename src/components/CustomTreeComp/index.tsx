import { SearchOutlined } from '@ant-design/icons';
import { Input, Tree } from 'antd';
import type { TreeProps } from 'antd/es/tree';
import React, { useEffect, useState } from 'react';
import Bucket from '@/module/cloud/buckets';
import Objectlay from '@/module/cloud/objectlay';
import useCloudStore from '@/store/cloud';
import cls from './index.module.less';
const StoreClassifyTree: React.FC = () => {
  const [gData, setGData] = useState<any[]>([]);

  const CloudStore: any = useCloudStore();
  useEffect(() => {
    getTreeData();
  }, []);
  useEffect(() => {
    console.log(CloudStore.cloudTree);
    setGData(CloudStore.cloudTree);
  }, [CloudStore.cloudTree]);
  const getTreeData = () => {
    if (Bucket.Root.HasSubDirectories) {
      Bucket.Root.children = [{} as Objectlay];
    }
    CloudStore.setCloudTree([Bucket.Root]);
  };
  const onSelect: TreeProps['onSelect'] = async (selectedKeys, info: any) => {
    Bucket.Current = info.node.props.data;
    const res = await Bucket.GetContent();
    CloudStore.setChoudData(res);
  };
  // const onExpand = async (expandedKeysValue: React.Key[], info: any) => {
  //   const res = await Bucket.GetLeftTree(info.node.props.data);
  //   setGData(Bucket.HandleTree(gData, res, info.node.Key));
  //   // setGData(info.node.props.data.children);
  // };
  const onLoadData = async (node: any) => {
    // new Promise<void>( (resolve) => {
    const res = await Bucket.GetLeftTree(node.props.data);
    Bucket.HandleTree(gData, res, node.Key);
    setGData(gData);
    CloudStore.setCloudTree(gData);
    // resolve();
    // });
  };
  return (
    <div>
      <div className={cls.title}>全部分类</div>
      <div className={cls.title}>
        <Input size="small" prefix={<SearchOutlined />} placeholder="搜索分类" />
      </div>
      <Tree
        className="draggable-tree"
        blockNode
        fieldNames={{
          title: 'Name',
          key: 'Key',
          children: 'children',
        }}
        treeData={gData}
        loadData={onLoadData}
        onSelect={onSelect}
        // onExpand={onExpand}
      />
    </div>
  );
};

export default React.memo(StoreClassifyTree);
