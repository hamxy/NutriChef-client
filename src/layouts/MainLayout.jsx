import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
// import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default MainLayout;
