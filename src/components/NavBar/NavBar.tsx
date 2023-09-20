import logo from "../assets/logo.png";
import styles from "./Navbar.module.scss";
function NavBar() {
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
            <li key={nav.id}>
              <a href={nav.link}>{nav.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
