import { Button, Divider } from 'antd';
import React from 'react';
interface BtnItemType {
  text: string;
  key?: string;
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
  className?: string;
}
interface BtnDivType {
  list: BtnItemType[] | string[];
  showDivider?: boolean;
  onClick?: Function;
}

export const BtnGroupDiv: React.FC<BtnDivType> = ({
  list,
  showDivider = true,
  onClick,
}) => {
  /**
   * @desc: 渲染对象类型按钮组
   * @param {BtnItemType} item
   * @param {number} index
   * @return {ReactNode[] } 按钮Dom
   */
  function _renderObjArr(item: BtnItemType, index: number) {
    return (
      <>
        <Button
          className={item.className}
          type={item.type || 'link'}
          onClick={() => {
            onClick && onClick({ text: item.text, key: item?.key });
          }}>
          {item.text}
        </Button>
        {showDivider && (index === list.length - 1 ? '' : <Divider type="vertical" />)}
      </>
    );
  }
  /**
   * @desc: 渲染string类型按钮组
   * @param {BtnItemType} item
   * @param {number} index
   * @return {ReactNode[] } 按钮Dom
   */
  function _renderStringArr(item: string, index: number) {
    return (
      <>
        <Button
          type={'link'}
          onClick={() => {
            onClick && onClick({ text: item });
          }}>
          {item}
        </Button>
        {showDivider && (index === list.length - 1 ? '' : <Divider type="vertical" />)}
      </>
    );
  }
  return (
    <>
      {list.map((item: BtnItemType | string, index: number) => {
        return typeof item === 'string'
          ? _renderStringArr(item, index)
          : _renderObjArr(item, index);
      })}
    </>
  );
};
