import React, { useState } from "react";
import styles from "./Faq.module.scss";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import FaqDropdown from "../FaqDropdown/FaqDropdown";

const Faq = () => {
 

  return (
    <div className={styles.faq}>
      <div className={styles.faq__main}>
        <h3>FAQ</h3>
        <h6>
          Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over.
        </h6>
        <p>
          Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over. Being gorgeous with belly side up I could pee on
          this if I had the energy but under the bed, for attack the child, open
          the door,
        </p>
      </div>

      <div className={styles.faq__dropdowns}>
        <FaqDropdown/>
        <FaqDropdown/>
        <FaqDropdown/>
        <FaqDropdown/>
        <FaqDropdown/>
        <FaqDropdown/>
      </div>
    </div>
  );
};

export default Faq;
