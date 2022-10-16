import React from 'react';

import ContentTemplate from '@/components/ContentTemplate';
import BreadCrumb from '@/components/BreadCrumb';

const Setting = () => {
  const content = (
    <>
      <h2>内容</h2>
    </>
  );
  const top = (
    <>
      <h3>顶部</h3>
    </>
  );
  const topLeft = (
    <>
      <BreadCrumb></BreadCrumb>
    </>
  );
  const topRight = (
    <>
      <h3>顶部右</h3>
    </>
  );
  return (
    <ContentTemplate
      content={content}
      contentTop={top}
      contentTopLeft={topLeft}
      contentTopRight={topRight}></ContentTemplate>
  );
};

export default Setting;
