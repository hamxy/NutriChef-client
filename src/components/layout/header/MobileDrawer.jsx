import { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ModalClose,
  IconButton,
  List,
  ListItemButton,
  Box,
  Typography,
} from "@mui/joy";
import { Drawer } from "@mui/material";
import Menu from "@mui/icons-material/Menu";

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    {
      title: "Recipe Explorer",
      path: "/recipes",
      icon: "fa-solid fa-utensils",
    },
    {
      title: "Create Recipe",
      path: "/",
      icon: "fa-solid fa-gauge",
    },
    {
      title: "Profile",
      path: "/profile",
      icon: "fa-solid fa-user",
    },
    {
      title: "Logout",
      path: "/auth/logout",
      icon: "fa-solid fa-right-from-bracket",
    },
  ];
  return (
    <>
      <Fragment>
        <IconButton
          variant="outlined"
          color="neutral"
          onClick={() => setIsOpen(true)}
          style={styles.hamburger}
        >
          <Menu />
        </IconButton>
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          sx={{ "& .MuiDrawer-paper": { backgroundColor: "#FFC145" } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              ml: "auto",
              mt: 1,
              mr: 2,
            }}
          >
            <Typography
              component="label"
              htmlFor="close-icon"
              fontSize="sm"
              fontWeight="lg"
              sx={{ cursor: "pointer" }}
            >
              Close
            </Typography>
            <ModalClose
              onClick={() => setIsOpen(false)}
              id="close-icon"
              sx={{ position: "initial" }}
            />
          </Box>
          <List
            size="lg"
            component="nav"
            sx={{
              display: "flex",
              fontSize: "lg",
              justifyContent: "center",
              gap: "80px",
            }}
          >
            {navigation.map((item, index) => (
              <ListItemButton
                key={index}
                sx={{
                  fontWeight: "lg",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <NavLink
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ fontSize: "20px" }}
                  />
                  {item.title}
                </NavLink>
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </Fragment>
    </>
  );
};

const styles = {
  hamburger: {
    padding: "10px",
    margin: "15px",
  },
};

export default MobileDrawer;
