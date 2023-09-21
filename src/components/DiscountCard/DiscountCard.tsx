import styles from "./DiscountCard.module.scss";
import percentIcon from "../../assets/percentIcon.png";

const DiscountCard = () => {
    return (
        <div className="discountCard">
            <div className={styles.discountCard}>
          <img className={styles.discountCard__icon} src={percentIcon} alt="file-icon" />
          <p className={styles.discountCard__percent}>5%</p>
          <p className={styles.discountCard__descText}>
            Average of 35-90 cents/gal. discount on selected locations ( over
            700 truck stops)
          </p>
          <button className={styles.discountCard__detailInfoBtn}>Detail info</button>
        </div>
        </div>
    )
}

export default DiscountCard;