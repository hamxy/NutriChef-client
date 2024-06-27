import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer, ModalClose, IconButton } from "@mui/joy";
import Menu from "@mui/icons-material/Menu";

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hamburger" style={styles.hamburger}>
        <IconButton
          variant="outlined"
          color="neutral"
          onClick={() => setIsOpen(true)}
        >
          <Menu />
        </IconButton>
      </div>
      <Drawer open={isOpen} size="sm" onClose={() => setIsOpen(false)}>
        <ModalClose />
        Hello
        <NavLink className={"navlink"} to="/">
          Home
        </NavLink>
        <NavLink className={"navlink"} to="/profile">
          profile
        </NavLink>
      </Drawer>
    </>
  );
};

const styles = {
  hamburger: {
    padding: "20px",
  },
};

export default MobileDrawer;
