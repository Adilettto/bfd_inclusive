import React from "react";
import logo from "../assets/logo.png";
import "./navBar.style.css";

function NavBar() {
  return (
    <div className="topnav">
      <img src={logo} className="logo" alt="logo" />
      <div>
        <ul>
          <a className="active" href="home">
            Fuel card
          </a>
          <a href="discount">Discount</a>
          <a href="apply">Apply for Card</a>
          <a href="contacts">Contacts</a>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
