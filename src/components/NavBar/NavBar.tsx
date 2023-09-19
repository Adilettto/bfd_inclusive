import React from "react";
import logo from "../assets/logo.png";
import styles from './Navbar.module.scss';
function NavBar() {
  // TODO Ant-design, sass, styles - classNames
  const navbar = ['discount', 'apply'];
  return (
    <div className={styles.navBar}>
      <img src={logo} className="logo" alt="logo" />
      <div className={styles.navBar__nav}>
        <ul>
          {/* {navbar.map((nav) => (
            <a className="active" href="home">
            Fuel card
          </a>
          ))} */}
          {/* TODO react-router Link, show with array */}
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
