import React from "react";
import styles from "./Exports.module.scss";
import web1 from "./Web-1.png";
import web2 from "./web2.png";

const Exports = () => {
  return (
    <div className={styles.exports}>
      <img className={styles.exports__left_web} src={web1} alt="web" />
      <button className={styles.exports__locations_btn}>
        Discount Fuel Locations
      </button>

      <img className={styles.exports__right_web} src={web2} alt="web" />
      <button className={styles.exports__shops_btn}>Truck repair shops</button>
    </div>
  );
};

export default Exports;
