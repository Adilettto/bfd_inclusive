import { useState } from "react";
import logo from "../assets/logo.png";
import styles from "./Navbar.module.scss";
import cn from 'classnames';
import { Link } from "react-router-dom";
import AdvantageCard from "../AdvantageCard/AdvantageCard";
function NavBar() {
  const [activeTab, setActiveTab] = useState(1);
  // TODO Ant-design, sass, styles - classNames

  const navbar = [
    { id: 1, label: "Fuel Card", link: "/home" },
    { id: 2, label: "Discount", link: "/discount" },
    { id: 3, label: "Apply for Card", link: "/apply" },
    { id: 4, label: "Contacts", link: "/contacts" },
  ];
  // {/* TODO react-router Link, show with array */}
  return (
    <div className={styles.navBar}>
      <img src={logo} className="logo" alt="logo" />
      <div className={styles.navBar__nav}>
        <ul>
          {navbar.map((nav) => (
            <li key={nav.id} onClick={() => setActiveTab(nav.id)}>
              <Link to={nav.link} className={cn(
                styles.navBar__link,
                activeTab === nav.id && styles.navBar__link_active
              )}>{nav.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
