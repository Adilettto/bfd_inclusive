import React from "react";
import styles from "./Exports.module.scss";
import web1 from "../assets/Web-1.png";

const Exports = () => {
  return (
    <div className={styles["exports"]}>
      <img className={styles["left-web"]} src={web1} alt="web"/>
      <button className={styles["locations-btn"]}>
        Discout Fuel Locations
      </button>

      
      <button className={styles["shops-btn"]}>Truck repair shops</button>
    </div>
  );
};

export default Exports;
