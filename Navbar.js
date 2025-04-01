import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./final.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/Restaurant/addRestaurant" className="navbutton">
            Add a new restaurant
          </NavLink>
          <NavLink to="/Restaurant/viewRestaurant" className="navbutton">
            View existing restaurants
          </NavLink>
        </div>
      </header>
    </>
  );
}
