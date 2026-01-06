import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>VANSHAURA TECH</h2>

      <ul style={styles.menu}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/About"
            style={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Contact"
            style={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#0f172a",
    fontSize: "2rem",
  },
  logo: {
    color: "#fff",
    margin: 0,
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#cbd5f5",
    textDecoration: "none",
    fontSize: "1.5rem",
  },
  activeLink: {
    textDecoration: "none",
    color: "#fff",
    borderBottom: "2px solid #38bdf8",
    paddingBottom: "4px",
    fontSize: "1.5rem",
  },
};

export default Nav;
