import React, { useState } from 'react';
import { Button, message, Space, Tag, Modal, ModalProps, Checkbox, Row, Col } from 'antd';
import SearchInput from '../SearchInput';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  PushpinFilled,
  SwapOutlined,
} from '@ant-design/icons';
import styles from './index.module.less';

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
const plainOptions: Option[] = [
  {
    label: '表头字段',
    value: 'Apple',
  },
  {
    label: '表头字段',
    value: 'Pear',
  },
  {
    label: '表头字段',
    value: 'Orange',
  },
  {
    label: '表头字段',
    value: 'Banner',
  },
];

interface TableHeaderOptionsProps extends ModalProps {}

const TableHeaderOptions = ({ open, onCancel }: TableHeaderOptionsProps) => {
  const [searchValue, setSearchValue] = useState<string>();
  const [checkedList, setCheckedList] = useState<any[]>([]);
  const [defaultCheckedList, setdefaultCheckedList] = useState<any[]>(plainOptions);
  const [indeterminate, setIndeterminate] = useState(false); // 设置 indeterminate 状态，只负责样式控制
  const [checkAll, setCheckAll] = useState(false);
  const saveSetting = () => {
    console.log(searchValue);
  };
  /**单个选择列元素事件 */
  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < defaultCheckedList.length);
    setCheckAll(list.length === defaultCheckedList.length);
  };
  /**全选事件 */
  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? defaultCheckedList.map((n) => n.value) : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <Modal
      width={428}
      title="显示列"
      open={open}
      onOk={saveSetting}
      onCancel={onCancel}
      cancelText="重置">
      <SearchInput
        placeholder="搜索表头字段"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        extra={<></>}
      />
      <Row className={styles[`check-title`]} justify="center">
        <Col span={10}>
          <Checkbox
            checked={checkAll}
            indeterminate={indeterminate}
            onChange={onCheckAllChange}>
            全选 {`${checkedList.length}/${defaultCheckedList.length}`}
          </Checkbox>
        </Col>
        <Col span={14} className={styles[`right-common`]}>
          <Space>
            列对齐
            <Button type="text" icon={<AlignRightOutlined />}></Button>
            <Button type="text" icon={<AlignCenterOutlined />}></Button>
            <Button type="text" icon={<AlignLeftOutlined />}></Button>
          </Space>
        </Col>
      </Row>
      <Checkbox.Group
        onChange={onChange}
        className={styles[`check-list`]}
        value={checkedList}>
        {defaultCheckedList.map((n) => (
          <Row key={n.value} className={styles[`check-list-items`]} justify="center">
            <Col span={12}>
              <Checkbox value={n.value}>{n.label}</Checkbox>
            </Col>
            <Col span={12} className={styles[`right-common`]}>
              <Button type="text" icon={<PushpinFilled />}></Button>
              <Button type="text" icon={<SwapOutlined />}></Button>
            </Col>
          </Row>
        ))}
      </Checkbox.Group>
    </Modal>
  );
};
export default TableHeaderOptions;
