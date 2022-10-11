import { useEffect, Fragment, type ReactElement } from 'react';
import PageLoading from '@/components/PageLoading';

export interface IProps {
  children: ReactElement;
}

/**
 *  鉴权 验证登录用户
 */
export default ({ children }: IProps) => {
  // 判断是否保存有登录状态
  const Token = sessionStorage?.TOKEN;
  useEffect(() => {}, []);

  if (Token) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <PageLoading />;
  }
};
