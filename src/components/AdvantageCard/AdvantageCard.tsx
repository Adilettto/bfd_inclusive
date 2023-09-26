import React from "react";
import styles from "./AdvantageCard.module.scss";
import cn from 'classnames';

type AdvantageCardProps = {
  title: string;
  list: string[];
  className?: string
};

const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, list, className }) => {
  // Card styles here
  return (
    <div className={cn(styles.card, className)}>
      <h2 className={styles.card__title}>{title}</h2>
      <div className={styles.card__list}>
        <ul>
          {list.map((listElement) => (
            <li>{listElement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AdvantageCard;
