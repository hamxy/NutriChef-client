// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./pages/Home";
import LoginRoute from "./pages/auth/Login";
// import RegisterRoute from "./routes/Register";
// import Header from "./components/MainNavigation";
import RootLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomeRoute /> },
      { path: "/login", element: <LoginRoute /> },
    ],
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
