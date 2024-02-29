// import { useState } from "react";
import "../assets/styles/components/MainNavigation.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  // const [isActive, setActive] = useState(false);

  return (
    <header>
      <h1>asdsa</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </header>
  );
}

export default MainNavigation;
