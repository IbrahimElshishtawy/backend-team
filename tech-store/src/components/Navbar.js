import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Tech Store</h1>
      <div className="links">
        <Link to="/">الرئيسية</Link>
        <Link to="/products">المنتجات</Link>
      </div>
    </nav>
  );
}

export default Navbar;