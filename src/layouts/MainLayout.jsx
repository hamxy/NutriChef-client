import { useEffect } from "react";
import Cookies from "js-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import { useMediaQuery } from "@mui/material";

function MainLayout() {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get();
    console.log(token);

    console.log(token);
    if (!token) {
      navigate("/auth/login");
    }
  }, [navigate]);

  return (
    <div style={isDesktop ? styles.desktop : styles.mobile}>
      <header
        style={{
          width: isDesktop ? "200px" : "0px",
          backgroundColor: "#FFC145",
        }}
      >
        <MainNavigation />
      </header>
      {/* Main will take ramaining space */}
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

const styles = {
  desktop: {
    boxSizing: "border-box",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    height: "100vh",
  },
};

export default MainLayout;
