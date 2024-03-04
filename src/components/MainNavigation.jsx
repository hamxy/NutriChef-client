// import { useState } from "react";
import "../assets/styles/components/MainNavigation.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  // const [isActive, setActive] = useState(false);

  return (
    <header>
      <h1>Header</h1>
      <div className="link-wrapper">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </div>
    </header>
  );
}

export default MainNavigation;
