import { createBrowserHistory } from 'history';
import React from 'react';

import useStore from '../store';

const Authority: React.FC<any> = ({ children }) => {
  const history = createBrowserHistory();
  const user = useStore((state) => state.user);
  console.log('Authority', user);

  if (!localStorage.getItem('Token')) {
    history.push('/user/login');
  }
  // if (!user?.token) {
  //   history.push('/user/login');
  // }

  return <>{children}</>;
};

export default Authority;
