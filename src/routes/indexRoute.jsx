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
import RecipePage from "../components/Recipe/RecipePage";
import EditRecipeForm from "../components/Recipe/EditRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <RecipeExplorer /> },
      { path: "profile", element: <Profile /> },
      { path: "create-recipe", element: <Dashboard /> },
      { path: "recipes/:id", element: <RecipePage /> },
      { path: "recipes/edit/:id", element: <EditRecipeForm /> }, // Edit Recipe
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
