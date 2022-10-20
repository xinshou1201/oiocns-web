interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
import type { ColumnsType } from 'antd/es/table';

export const data: DataType[] = [
  {
    key: '1',
    name: '测试数据1',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: '测试数据2',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: '测试数据3',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: '测试数据4',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '5',
    name: '测试数据5',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '6',
    name: '测试数据6',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
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
    dataIndex: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
];
