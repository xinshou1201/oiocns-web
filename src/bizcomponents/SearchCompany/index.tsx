import React, { useState } from 'react';
import { Company } from '@/module/org';
import CompanyServices from '@/module/org/company';
import SearchInput from '@/components/SearchInput';
import styles from './index.module.less';
import { Avatar, Card, Col, Row, Skeleton, Tag, Typography } from 'antd';

type CompanySearchTableProps = {
  [key: string]: any;
};
/* 
  弹出框表格查询
*/
const CompanySearchList: React.FC<CompanySearchTableProps> = () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<Company[]>([]);

  const getList = async (searchKey?: string) => {
    setLoading(true);
    const { data } = await CompanyServices.searchCompany({
      filter: searchKey, // || '91330304254498785G',
      page: 1,
      pageSize: 10,
    });
    setLoading(false);
    return setDataSource(data);
  };

  return (
    <div className={styles[`search-card`]}>
      <SearchInput
        extra={`找到${dataSource?.length}家单位`}
        onChange={(event) => {
          getList(event.target.value);
        }}
      />
      <Row gutter={16}>
        {dataSource.map((item) => (
          <>
            <Col span={12}>
              <Card
                className={styles.card}
                style={{ width: 300, marginTop: 16 }}
                key={item.id}
                // actions={[
                //   <Space key="add">
                //     <PlusOutlined />
                //     加入
                //   </Space>,
                // ]}
              >
                <Skeleton loading={loading} avatar active>
                  <Card.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={item.name}
                    description={<Tag color="blue">{item.code}</Tag>}
                  />
                  <div className={styles.description}>
                    <Typography.Text>简介：{item.team.remark || '-'}</Typography.Text>
                  </div>
                </Skeleton>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};
export default CompanySearchList;
