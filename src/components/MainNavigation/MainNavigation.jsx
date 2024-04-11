// import { useState } from "react";
import { useState, useEffect } from "react";
import "./MainNavigation.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  const [isExpanded, setExpanded] = useState(false);
  const [isActive, setActive] = useState(false);
  const user = "marian";

  useEffect(() => {}, [isExpanded]);

  return (
    <header>
      <NavLink className={"navlink"} to="/">Home</NavLink>
      <NavLink className={"navlink"} to="/register">Register</NavLink>
      <NavLink className={"navlink"} to="/login">Login</NavLink>
      <NavLink className={"navlink"} to={`/user/${user}/profile`}>Profile</NavLink>
    </header>
  );
}

export default MainNavigation;
