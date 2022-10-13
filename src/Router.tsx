import { Navigate, useRoutes } from 'react-router-dom';

import Chart from '@/pages/Chart';
import NotFound from '@/pages/NotFound';

const Router = () =>
  useRoutes([
    { path: '/chart', element: <Chart /> },
    {
      path: '/',
      children: [
        { path: '/', element: <Navigate to="/chart" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" /> },
  ]);

export default Router;
