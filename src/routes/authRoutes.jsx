import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

const authRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> }
];

export default authRoutes;
