import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row } from 'antd';
import React from 'react';
import styles from './index.module.less';

type SearchInputProps = {
  extra: string | React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};
// 搜索组件头部
const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { extra, onChange } = props;
  return (
    <Row gutter={[16, 16]} align="middle">
      <Col span={16}>
        <div className={styles[`search-input`]}>
          <Input
            prefix={<SearchOutlined className={styles.icon} />}
            placeholder="请输入单位编码"
            bordered={false}
            onChange={onChange}
          />
        </div>
      </Col>
      {extra && (
        <Col span={8} style={{ textAlign: 'right' }}>
          {extra}
        </Col>
      )}
    </Row>
  );
};

export default SearchInput;
