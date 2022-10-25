import { Tag } from 'antd';
import React from 'react';

import headimgStyle from './headimg.module.less';

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
    isSquare = true,
    imgWidth = 40 + 'px',
  } = props;
  return (
    <>
      {label ? (
        <div className={headimgStyle.user_head_label}>
          <Tag color="#3e5ed8">{label}</Tag>
        </div>
      ) : (
        ''
      )}
      {url ? (
        <div
          className={`${headimgStyle.user_head_img_wrap}`}
          style={{ width: imgWidth, minWidth: imgWidth, height: imgWidth }}>
          <img
            className={`${headimgStyle.user_img} ${
              isSquare ? headimgStyle.square_box : headimgStyle.circle_box
            }`}
            src={url}
            alt=""
          />
        </div>
      ) : (
        <div
          style={{ width: imgWidth, minWidth: imgWidth, height: imgWidth }}
          className={`${headimgStyle.user_head_img_wrap} ${headimgStyle.txt_img} ${
            isSquare ? headimgStyle.square_box : headimgStyle.circle_box
          } `}>
          <span>{name.slice(0, limit).toLocaleUpperCase()}</span>
        </div>
      )}
    </>
  );
};
export default HeadImg;
