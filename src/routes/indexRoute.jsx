import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import adminRoutes from "./adminRoutes";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import Home from "../pages/Home";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      ...adminRoutes,
      ...userRoutes,
      ...authRoutes,
    ],
  },
]);

export default router;
