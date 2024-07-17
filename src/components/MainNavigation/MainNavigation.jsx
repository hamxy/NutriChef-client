import MobileDrawer from "./MobileDrawer";
import DesktopSideNav from "./DesktopSideNav";
import { useMediaQuery } from "@mui/material";

function MainNavigation() {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  return <>{isDesktop ? <DesktopSideNav /> : <MobileDrawer />}</>;
}

export default MainNavigation;
