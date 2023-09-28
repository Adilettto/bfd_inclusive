import styles from "./GetDiscount.module.scss";
import DiscountCard from "../DiscountCard/DiscountCard";

const GetDiscount = () => {
  const discountData = [
    {
      id: 1,
      description:
        "Average of 35-90 cents/gal. discount on selected locations " +
        "(over 700 truck stops)",
    },
    {
      id: 2,
      description: "Credit line (2500$ per truck)",
    },
    {
      id: 3,
      description: "Cards accepted at  over 12,000 truck stops, (EFS network)",
    },
    {
      id: 4,
      description: "Real-Time  online account and app",
    },
  ];

  return (
    <div className={styles.discount}>
      <h2 className={styles.discount__header}>Get a discount</h2>
      <p className={styles.discount__desc}>
        We offer wide range of fule cards for various types of machinery and
        equipment.
      </p>
      <div className={styles.discount__container}>
        {discountData.map((discount) => (
          <DiscountCard key={discount.id} description={discount.description} />
        ))}
      </div>
    </div>
  );
};

export default GetDiscount;
