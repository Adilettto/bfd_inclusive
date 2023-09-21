import React from "react";
import styles from "./GetDiscount.module.scss";
import DiscountCard from "../DiscountCard/DiscountCard";

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
        <DiscountCard/>
        <DiscountCard/>
        <DiscountCard/>
        <DiscountCard/>
      </div>
    </div>
  );
};



export default GetDiscount;


