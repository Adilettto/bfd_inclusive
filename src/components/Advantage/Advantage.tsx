import "./Advantage.module.scss";
import AdvantageCard from "../AdvantageCard/AdvantageCard";

function Advantage() {
  const cards = [
    {
      title: "Lorem ipsum",
      list: [
        "dolor sit amet consectetur adipisicing elit.",
        "Pariatur reprehenderit id sed dignissimos",
        "eum rem voluptates eius modi similique",
      ],
    },
    {
      title: "Lorem ipsum",
      list: [
        "dolor sit amet consectetur adipisicing elit.",
        "Pariatur reprehenderit id sed dignissimos",
        "eum rem voluptates eius modi similique",
      ],
    },
    {
      title: "Lorem ipsum",
      list: [
        "dolor sit amet consectetur adipisicing elit.",
        "Pariatur reprehenderit id sed dignissimos",
        "eum rem voluptates eius modi similique",
      ],
    },
  ];
  return (
    <div className="h">
      <h1>Advantages</h1>
      <p>
        We offer wide range of fule cards for various types of machinery and
        equipment.
      </p>
      <div className="h_hor"></div>
      <div className="h_vert"></div>
      <div className="h_vert1"></div>
      <div className="h_vert2"></div>
      {/* TODO: create component AdvantageCard, change file name, show */}
      <div className="card">
        {cards.map((card) => (
          <AdvantageCard title={card.title} list={card.list} />
        ))}
      </div>
    </div>
  );
}

export default Advantage;
