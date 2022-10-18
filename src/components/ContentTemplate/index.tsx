import { Layout } from 'antd';
import React from 'react';

import cls from './index.module.less';

const { Sider, Content } = Layout;

/**
 * 内容区模板类
 */
type ContentTemplateType = {
  className?: string; //wrap calss
  content: React.ReactNode; // 内容区
  sider?: React.ReactNode; // 左侧
  contentTop?: React.ReactNode; // 内容区顶部
  contentTopLeft?: React.ReactNode; // 内容区顶部左侧
  contentTopRight?: React.ReactNode; // 内容区顶部右侧
};

/**
 * 内容区模板
 *
 * 包含：左侧、内容区顶部(面包屑、操作区)、内容区
 * @returns
 */
const ContentTemplate: React.FC<ContentTemplateType> = ({
  className,
  content,
  sider,
  contentTop,
  contentTopLeft,
  contentTopRight,
}) => {
  // TODO 布局样式、侧边展开和收缩 侧边栏顶部([icon/名称] 需传入展示)
  return (
    <Layout className={`${className}`} style={{ height: '100%' }}>
      {sider && <Sider className={cls.sider}>{sider}</Sider>}
      <Layout>
        <div className={cls.contenttop}>{contentTop}</div>
        <div className={cls.contenttop}>
          <div>{contentTopLeft}</div>
          <div>{contentTopRight}</div>
        </div>
        <Content className={cls.content}>{content}</Content>
      </Layout>
    </Layout>
  );
};

export default ContentTemplate;
