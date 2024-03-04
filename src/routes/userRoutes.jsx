import Profile from '../pages/user/Profile';
import Posts from '../pages/user/Posts';

const userRoutes = [
  { path: '/user/profile', element: <Profile /> },
  { path: '/user/posts', element: <Posts /> }
];

export default userRoutes;
