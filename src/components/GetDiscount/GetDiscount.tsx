import React from "react";
import fileIcon from "./Coupon 1.png";
import styles from "./GetDiscount.module.scss";

const GetDiscount = () => {

  return (
    <div className={styles.discount}>
      <h2 className={styles.discount__header}>Get a discount</h2>
      <p className={styles.discount__desc}>
        We offer wide range of fule cards for various types of machinery and
        equipment.
      </p>
      <div className={styles.discount__container}>
        {/* TODO: create DiscountCard, show with Array.map(), photo -> Assets, ant-design: Row, Col, Button */}
        <div className={styles.card}>
          <img className={styles.card__icon} src={fileIcon} alt="file-icon" />
          <p className={styles.card__percent}>5%</p>
          <p className={styles.card__desc_text}>
            Average of 35-90 cents/gal. discount on selected locations ( over
            700 truck stops)
          </p>
          <button className={styles.card__detail_info_btn}>Detail info</button>
        </div>

        <div className={styles.card}>
          <img className={styles.card__icon} src={fileIcon} alt="file-icon" />
          <p className={styles.card__percent}>5%</p>
          <p className={styles.card__desc_text}>
            Credit line (2500$ per truck)
          </p>
          <button className={styles.card__detail_info_btn}>Detail info</button>
        </div>

        <div className={styles.card}>
          <img className={styles.card__icon} src={fileIcon} alt="file-icon" />
          <p className={styles.card__percent}>5%</p>
          <p className={styles.card__desc_text}>
            Cards accepted at over 12,000 truck stops, (EFS network)
          </p>
          <button className={styles.card__detail_info_btn}>Detail info</button>
        </div>

        <div className={styles.card}>
          <img className={styles.card__icon} src={fileIcon} alt="file-icon" />
          <p className={styles.card__percent}>5%</p>
          <p className={styles.card__desc_text}>
            Real-Time online account and app
          </p>
          <button className={styles.card__detail_info_btn}>Detail info</button>
        </div>
      </div>
    </div>
  );
};

export default GetDiscount;
