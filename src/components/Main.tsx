import styles from "./Main.module.scss";
import gasBox from "../assets/Gas-box.png";

const Main = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.main__text}>
        {" "}
        <span className={styles.main__textFirst}>Fuel now</span>, Pay later No
        Monthly Fee!
      </h1>
      <div className={styles.main__btns}>
        <button className={` ${styles.main__btn} ${styles.main__requestBtn} `}>
          Request a card info
        </button>
        <button className={` ${styles.main__btn} ${styles.main__applyBtn} `}>
          Apply for a card
        </button>
        <p className={styles.main__pText}>
          We offer wide range of fule cards for various types of machinery and
          equipment.
        </p>
      </div>
      <img className={styles.main__img} src={gasBox} alt="fuel-box" />
    </div>
  );
};

export default Main;
