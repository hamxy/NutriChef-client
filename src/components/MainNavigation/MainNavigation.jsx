// import { useState } from "react";
import { useState, useEffect } from "react";
import "./MainNavigation.css";
// import { NavLink } from "react-router-dom";

function MainNavigation() {
  const [isExpanded, setExpanded] = useState(false);
  // const [isActive, setActive] = useState(false);
  // const user = "marian";

  // useEffect(() => {

  // }, [isExpanded]);

  return (
    <header>
      <button aria-expanded={isExpanded} aria-label="menu" id="hamburger" onClick={() => setExpanded(!isExpanded)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* <div className="link-wrapper">
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
      </div> */}
    </header>
  );
}

export default MainNavigation;
