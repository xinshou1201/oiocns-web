import { Tag } from 'antd';
import React, { useEffect } from 'react';

import Img from '@/assets/imgs/toux.jpg';

import headimg from './headImg.module.less';

interface Iprops {
  name?: string;
  label?: string;
  url?: string; //图片地址
  limit?: number; // 文字展示长度
  classes?: string;
  isSquare?: boolean; //是否方形展示 true--方形  false--圆形
  imgWidth?: number;
}
const HeadImg = (props: Iprops) => {
  const {
    name = '',
    label = '',
    url,
    limit = 2,
    classes,
    isSquare = true,
    imgWidth = 40 + 'px',
  } = props;
  return (
    <>
      {label ? (
        <div className={headimg.user_head_label}>
          <Tag color="#3e5ed8">#2db7f5</Tag>
        </div>
      ) : (
        ''
      )}
      {url ? (
        <div
          className={headimg.user_head_img_wrap}
          style={{ width: imgWidth, minWidth: imgWidth, height: imgWidth }}>
          {/* <img
            className={`${headimg.user_img} ${
              isSquare ? headimg.square_box : headimg.circle_box
            }`}
            src={url}
            alt=""
          /> */}
          <Img />
        </div>
      ) : (
        <div
          style={{ width: imgWidth, minWidth: imgWidth, height: imgWidth }}
          className={`${headimg.user_head_img_wrap} txt-img ${
            isSquare ? headimg.square_box : headimg.circle_box
          } `}>
          <span>{name.slice(0, limit).toLocaleUpperCase()}</span>
        </div>
      )}
    </>
  );
};
export default HeadImg;
