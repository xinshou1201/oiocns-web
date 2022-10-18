import ContentTemplate from '@/components/ContentTemplate';
import { Card } from 'antd';
import React from 'react';

type TodoProps = {};
const Todo: React.FC<TodoProps> = () => {
  // const { route } = props;
  // console.log(route.routes);
  return (
    <ContentTemplate>
      <Card>办事</Card>
    </ContentTemplate>
  );
};

export default Todo;
