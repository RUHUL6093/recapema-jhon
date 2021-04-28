import React from "react";
import logo from "../../Images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="" />
      <nav>
        <a href='/shop'>Shop</a>
        <a href='/review'>Order Review</a>
        <a href='/manage'>Manage Inventory</a>
        <a href='/admin'>Admin</a>
        <a href='/login'>login</a></nav>
    </div>
  );
};
export default Header;
