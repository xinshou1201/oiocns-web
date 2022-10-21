interface DataType {
  key: React.Key;
  name: string;
  size: number;
  desc: string;
  creatTime: string;
}
import type { ColumnsType } from 'antd/es/table';

export const data: DataType[] = [
  {
    key: '1',
    name: '测试数据1',
    size: 32,
    desc: 'New York No. 1 Lake Park',
    creatTime: '2022-12-12',
  },
  {
    key: '2',
    name: '测试数据2',
    size: 42,
    desc: 'London No. 1 Lake Park',
    creatTime: '2022-12-12',
  },
  {
    key: '3',
    name: '测试数据3',
    size: 32,
    desc: 'Sidney No. 1 Lake Park',
    creatTime: '2022-12-12',
  },
  {
    key: '4',
    name: '测试数据4',
    size: 99,
    desc: 'Sidney No. 1 Lake Park',
    creatTime: '2022-12-12',
  },
  {
    key: '5',
    name: '测试数据5',
    size: 955,
    desc: 'Sidney No. 1 Lake Park',
    creatTime: '2022-12-12',
  },
  {
    key: '6',
    name: '测试数据6',
    size: 66,
    desc: 'Sidney No. 1 Lake Park',
    creatTime: '2022-12-12',
  },
];
export const columns: ColumnsType<any> = [
  {
    title: '序号',
    fixed: 'left',
    width: 50,
    render: (_key: any, _record: any, index: number) => {
      return index + 1;
    },
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'size',
  },
  {
    title: '描述',
    dataIndex: 'desc',
  },
  {
    title: '时间',
    dataIndex: 'creatTime',
  },
];
