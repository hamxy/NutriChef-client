import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGauge,
  faUtensils,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

library.add(faGauge, faUtensils, faUser, faRightFromBracket);

const DesktopSideNav = () => {
  const navigation = [
    {
      title: "Dashboard",
      path: "/",
      icon: "fa-solid fa-gauge",
    },
    {
      title: "Recipe Explorer",
      path: "/recipes",
      icon: "fa-solid fa-utensils",
    },
    {
      title: "Profile",
      path: "/profile",
      icon: "fa-solid fa-user",
    },
    {
      title: "Logout",
      path: "/logout",
      icon: "fa-solid fa-right-from-bracket",
    },
  ];

  return (
    <div style={styles.container}>
      {navigation.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          style={({ isActive }) => ({
            ...styles.navLink,
            ...(isActive
              ? { backgroundColor: "#FFE1CE", color: "#151755" }
              : {}),
          })}
        >
          <FontAwesomeIcon icon={item.icon} style={{ fontSize: "20px" }} />
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    gap: "50px",
    alignItems: "center",
    justifyContent: "center",
  },
  navLink: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
    // backgroundColor: "red",
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
  },
};

export default DesktopSideNav;
