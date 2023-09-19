import React from "react";
import styles from "./Main.module.scss";
import gasBox from "../assets/Gas-box.png";

const Main = () => {
  return (
    // TODO styles classNames,
    <div className={styles.main}>
      <h1 className={styles["main-text"]}> <span className={styles["main-text-first"]}>Fuel now</span>, Pay later No Monthly Fee!</h1>
      <div className={styles["main-btns"]}>
        <button className={` ${styles["main-btn"]} ${styles["request-btn"]} `}>Request a card info</button>
        <button className={` ${styles["main-btn"]} ${styles["apply-btn"]} `}>Apply for a card</button>
        <p className={styles["p-text"]}>
          We offer wide range of fule cards for various types of machinery and
          equipment.
        </p>

      </div>
      <img className={styles["main-img"]} src={gasBox} alt="fuel-box" />
    </div>
  );
};

export default Main;
