import React from 'react';
import AdminLayout from '../layouts/Admin';

const TestPage: React.FC = (props) => {
  return <AdminLayout location={props?.location}></AdminLayout>;
};

export default TestPage;
