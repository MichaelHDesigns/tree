import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/users" className="nav-link">User List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;