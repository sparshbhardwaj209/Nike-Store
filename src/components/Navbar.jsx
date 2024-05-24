import React from "react";

const Navbar = () => {
  return (
    <nav className="container">
      <div>
        <img className="logo" src="/src/assets/brand_logo.png" alt="brand Logo" />
      </div>
      
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="btn-login">Login</button>
    </nav>
  );
};

export default Navbar;
