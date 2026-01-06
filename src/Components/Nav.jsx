import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <h2 className="logo">VANSHAURA TECH</h2>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu */}
      <ul className={`menu ${open ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" onClick={() => setOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
