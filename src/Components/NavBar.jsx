import React from "react";
import "../css/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/">Movies</Link>
            <Link to="/favorites">Favorites</Link>
        </div>
      </nav>
    </>
  );
}
