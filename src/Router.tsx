import { Navigate, useRoutes } from 'react-router-dom';

import NotFound from '@/pages/NotFound';
import SignIn from '@/pages/SignIn';

const Router = () =>
  useRoutes([
    {
      path: '/signin',
      element: <SignIn />,
    },
    {
      path: '/',
      children: [
        { path: '/', element: <Navigate to="/signin" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" /> },
  ]);

export default Router;
