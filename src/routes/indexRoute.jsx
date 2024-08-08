import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Logout from "../Pages/Logout";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";
import Profile from "../Pages/Profile";
import RecipeExplorer from "../Pages/RecipeExplorer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "recipes", element: <RecipeExplorer /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);

export default router;
