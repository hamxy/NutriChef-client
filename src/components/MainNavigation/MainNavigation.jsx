import MobileDrawer from "./MobileDrawer";
import DesktopSideNav from "./DesktopSideNav";
import { useMediaQuery } from "@mui/material";

function MainNavigation() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return <header>{isDesktop ? <DesktopSideNav /> : <MobileDrawer />}</header>;
}

export default MainNavigation;
