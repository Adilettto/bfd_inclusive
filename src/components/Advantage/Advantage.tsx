import AdvantageCard from "../AdvantageCard/AdvantageCard";
import styles from "./Advantage.module.scss";

function Advantage() {
  const cards = [
    {
      title: "Lorem ipsum1",
      list: [
        "dolor sit amet consectetur adipisicing elit.",
        "Pariatur reprehenderit id sed dignissimos",
        "eum rem voluptates eius modi similique",
      ],
    },
    {
      title: "Lorem ipsum2",
      list: [
        "dolor sit amet consectetur adipisicing elit.",
        "Pariatur reprehenderit id sed dignissimos",
        "eum rem voluptates eius modi similique",
      ],
    },
    {
      title: "Lorem ipsum3",
      list: [
        "dolor sit amet consectetur adipisicing elit.",
        "Pariatur reprehenderit id sed dignissimos",
        "eum rem voluptates eius modi similique",
      ],
    },
  ];
  return (
    <div className={styles.h}>
      <h1>Advantages</h1>
      <p>
        We offer wide range of fule cards for various types of machinery and
        equipment.
      </p>
      <div className={styles.h__hor}></div>
      <div className={styles.h__vert}></div>
      <div className={styles.h__vert1}></div>
      <div className={styles.h__vert2}></div>
      <div className={styles.card}>
        {cards.map((card, i) => (
          <AdvantageCard
            title={card.title}
            list={card.list}
            className={styles[`card-${i + 1}`]}
            key={card.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Advantage;
