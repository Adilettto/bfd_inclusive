import styles from "./DiscountCard.module.scss";
import percentIcon from "../../assets/percentIcon.png";

interface DiscountCardProps {
  description: string;
}

const DiscountCard: React.FC<DiscountCardProps> = ({ description }) => {

 
    return (
        <div className="discountCard">
            <div className={styles.discountCard}>
          <img className={styles.discountCard__icon} src={percentIcon} alt="file-icon" />
          <p className={styles.discountCard__percent}>5%</p>
          <p className={styles.discountCard__descText}>
            {description}
          </p>
          <button className={styles.discountCard__detailInfoBtn}>Detail info</button>
        </div>
        </div>
    )
}

export default DiscountCard;