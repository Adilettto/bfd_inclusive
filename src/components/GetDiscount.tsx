import React from "react";
import fileIcon from "../assets/Coupon 1.png";
import styles from "./GetDiscount.module.scss";

const GetDiscount = () => {
  return (
    <div className={styles["get-discount"]}>
      <h2 className={styles["discount-header"]}>Get a discount</h2>
      <p className={styles["discount-desc"]}>
        We offer wide range of fule cards for various types of machinery and
        equipment.
      </p>
      <div className={styles["discount-container"]}>
        <div className={styles["card"]}>
          <img src={fileIcon} alt="file-icon" />
          <p className={styles["percent-number"]}>5%</p>
          <p className={styles["desc-text"]}>
            Average of 35-90 cents/gal. discount on selected locations ( over
            700 truck stops)
          </p>
          <button className={styles["detail-info-btn"]}>Detail info</button>
        </div>

        <div className={styles["card"]}>
          <img src={fileIcon} alt="file-icon" />
          <p className={styles["percent-number"]}>5%</p>
          <p className={styles["desc-text"]}>Credit line (2500$ per truck)</p>
          <button className={styles["detail-info-btn"]}>Detail info</button>
        </div>

        <div className={styles["card"]}>
          <img src={fileIcon} alt="file-icon" />
          <p className={styles["percent-number"]}>5%</p>
          <p className={styles["desc-text"]}>
            Cards accepted at over 12,000 truck stops, (EFS network)
          </p>
          <button className={styles["detail-info-btn"]}>Detail info</button>
        </div>

        <div className={styles["card"]}>
          <img src={fileIcon} alt="file-icon" />
          <p className={styles["percent-number"]}>5%</p>
          <p className={styles["desc-text"]}>
            Real-Time online account and app
          </p>
          <button className={styles["detail-info-btn"]}>Detail info</button>
        </div>
      </div>
    </div>
  );
};

export default GetDiscount;
