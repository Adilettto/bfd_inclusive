import React from "react";
import styles from "./Exports.module.scss";
import web1 from "../assets/Web-1.png";
import web2 from "../assets/web2.png";

const Exports = () => {
  return (
    <div className={styles["exports"]}>
      <img className={styles["left-web"]} src={web1} alt="web" />
      <button className={styles["locations-btn"]}>
        Discount Fuel Locations
      </button>

      <img className={styles["right-web"]} src={web2} alt="web" />
      <button className={styles["shops-btn"]}>Truck repair shops</button>
    </div>
  );
};

export default Exports;
