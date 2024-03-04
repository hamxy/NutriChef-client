import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import adminRoutes from './adminRoutes';
import userRoutes from './userRoutes';
import authRoutes from './authRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: "/", element: <h2>Hello</h2>},
      ...adminRoutes,
      ...userRoutes,
      ...authRoutes
    ]
  }
]);

export default router;
