import React from "react";
import "./Advantage.module.scss";
import styles from './Advantage.module.scss';
import AdvantageCard from "../AdvantageCard/AdvantageCard";

function Advantage() {

  const cards = [
    {
      title: 'Test',
      list: ['test', 'test1']
    },
    {
      title: 'Test',
      list: ['test', 'test1']
    },
    {
      title: 'Test',
      list: ['test', 'test1']
    }
  ]
  return (
    <div>
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
      {cards.map((card) => (<AdvantageCard title={card.title} list={card.list} />))}
      {/* <div className="card">
        <ul>
          <li className="h2">Lorem ipsum</li>
          <li>dolor sit amet consectetur adipisicing elit.</li>
          <li>Pariatur reprehenderit id sed dignissimos</li>
          <li>eum rem voluptates eius modi similique</li>
        </ul>
      </div>
      <div className="card1">
        <ul>
          <li className="h2">Lorem ipsum</li>
          <li>dolor sit amet consectetur adipisicing elit.</li>
          <li>Pariatur reprehenderit id sed dignissimos</li>
          <li>eum rem voluptates eius modi similique</li>
        </ul>
      </div>
      <div className="card2">
        <ul>
          <li className="h2">Lorem ipsum</li>
          <li>dolor sit amet consectetur adipisicing elit.</li>
          <li>Pariatur reprehenderit id sed dignissimos</li>
          <li>eum rem voluptates eius modi similique</li>
        </ul>
      </div> */}
    </div>
  );
}

export default Advantage;
