import React from "react";
import styles from "./AdvantageCard.module.scss";

type AdvantageCardProps = {
  title: string;
  list: string[];
};

const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, list }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{title}</h2>
      <ul>
        {list.map((listElement) => (
          <li>{listElement}</li>
        ))}
      </ul>
    </div>
  );
};
export default AdvantageCard;
