// import { useState } from "react";
import "../assets/styles/components/MainNavigation.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  // const [isActive, setActive] = useState(false);
  const user = "marian"

  return (
    <header>
      <h1>Header</h1>
      <div className="link-wrapper">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/register">
          Register
        </NavLink>
        <NavLink to="/login">
          Login
        </NavLink>
        <NavLink to={`/user/${user}/profile`}>
          Profile
        </NavLink>
      </div>
    </header>
  );
}

export default MainNavigation;
