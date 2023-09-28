import React, { useState } from 'react'
import styles from "./FaqDropdown.module.scss";
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const FaqDropdown = () => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownActive(!isDropdownActive);
    };
  return (
    <div className={styles.dropdown}>
          <div
            className={`${styles.dropdown__q} ${
              isDropdownActive ? styles.active : ""
            }`}
            onClick={toggleDropdown}
          >
            <p>Skjdajhdas jksadasn ?</p>
            {isDropdownActive ? <UpOutlined /> : <DownOutlined />}
          </div>
          <p
            className={`${styles.dropdown__answer} ${
              isDropdownActive ? styles.active : ""
            }`}
          >
            Skjdajhdas jksadasn !
          </p>
        </div>
  )
}

export default FaqDropdown