import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import { useMediaQuery } from "@mui/material";

function MainLayout() {
  const isDesktop = useMediaQuery("(min-width: 934px)");

  return (
    <div style={isDesktop ? styles.desktop : styles.mobile}>
      <header
        style={{
          width: isDesktop ? "200px" : "0px",
          backgroundColor: "#FF7E3D",
        }}
      >
        <MainNavigation />
      </header>
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
