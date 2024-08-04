import MobileDrawer from "./MobileDrawer";
import DesktopSideNav from "./DesktopSideNav";
import { useMediaQuery } from "@mui/material";

function Header() {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  return <>{isDesktop ? <DesktopSideNav /> : <MobileDrawer />}</>;
}

export default Header;
