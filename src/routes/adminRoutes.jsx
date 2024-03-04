import Settings  from '../pages/admin/Settings';
import Dashboard from "../pages/admin/Dashboard"

const adminRoutes = [
  { path: '/admin/dashboard', element: <Dashboard /> },
  { path: '/admin/settings', element: <Settings /> }
];

export default adminRoutes;
