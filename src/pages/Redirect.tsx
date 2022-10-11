import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectPage: React.FC = () => {
  return <Redirect to="/org/home" />;
};
export default RedirectPage;
