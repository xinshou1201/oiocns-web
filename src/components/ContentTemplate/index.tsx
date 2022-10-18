import { Col, Layout, Row } from 'antd';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import BreadCrumb from '../BreadCrumb';

import cls from './index.module.less';

const { Sider, Content } = Layout;

/**
 * 内容区模板类
 */
type ContentTemplateType = {
  content?: React.ReactNode; // 内容区
  sider?: React.ReactNode; // 左侧
  contentTop?: React.ReactNode; // 内容区顶部
  contentTopLeft?: React.ReactNode; // 内容区顶部左侧
  contentTopRight?: React.ReactNode; // 内容区顶部右侧
  hideBreadCrumb?: boolean;
  children?: React.ReactNode;
};

/**
 * 内容区模板
 *
 * 包含：左侧、内容区顶部(面包屑、操作区)、内容区
 * @returns
 */
const ContentTemplate: React.FC<ContentTemplateType & RouteComponentProps> = (props) => {
  const {
    content,
    sider,
    // contentTop,
    // contentTopLeft,
    contentTopRight,
    hideBreadCrumb = false,
    children,
  } = props;
  // TODO 布局样式、侧边展开和收缩
  return (
    <Layout>
      {sider && (
        <Sider className={cls.sider} width={220}>
          {sider}
        </Sider>
      )}
      <Layout className={cls.container}>
        {(!hideBreadCrumb || contentTopRight) && (
          <Row className={cls[`content-top`]}>
            <Col>{!hideBreadCrumb && <BreadCrumb />}</Col>
            <Col>{contentTopRight}</Col>
          </Row>
        )}
        {/* <div className={cls.contenttop}>{contentTop}</div>
        <div className={cls.contenttop}>
          <div>{contentTopLeft}</div>
          <div>{contentTopRight}</div>
        </div> */}
        <Content className={cls.content}>{content || children}</Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(ContentTemplate);
