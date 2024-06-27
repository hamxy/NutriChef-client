import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";

function MainLayout() {
  return (
    <div style={styles.container}>
      <header>
        <MainNavigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const styles = {
  container: {
    margin: "auto",
    maxWidth: "1200px",
    backgroundColor: "green",
  },
};

export default MainLayout;
