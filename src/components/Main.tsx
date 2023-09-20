import React from "react";
import styles from "./Main.module.scss";
import gasBox from "../assets/Gas-box.png";

const Main = () => {
  return (
    <div className={styles.main}>
      {/* TODO: main__text */}
      <h1 className={styles.main_text}> <span className={styles.main_textFirst}>Fuel now</span>, Pay later No Monthly Fee!</h1>
      <div className={styles.main_btns}>
        <button className={` ${styles.main_btn} ${styles.main_requestBtn} `}>Request a card info</button>
        <button className={` ${styles.main_btn} ${styles.main_applyBtn} `}>Apply for a card</button>
        <p className={styles.main_pText}>
          We offer wide range of fule cards for various types of machinery and
          equipment.
        </p>

      </div>
      <img className={styles.main_img} src={gasBox} alt="fuel-box" />
    </div>
  );
};

export default Main;
