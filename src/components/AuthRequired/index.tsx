import { useAtom } from 'jotai';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthAtom } from '@/store/auth.jotai';

type Props = {
  children: ReactNode;
};

const AuthRequired = ({ children }: Props) => {
  const [isAuth] = useAtom(isAuthAtom);

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

export default AuthRequired;
