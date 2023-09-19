import React from "react";
import Card from "../assets/Card.png";
import "./aboutCards.style.css";
// import { SplitText } from "@cyriacbr/react-split-text";

function AboutCards() {
  return (
    // TODO: change style file name
    <div className="aboutcards">
      <div className="text-content">
        <h2>About cards</h2>
        <h3>
          Fuel cards are payment cards that are used to purchase fuel for a
          fleet of vehicles.
        </h3>
        <p>
          The US Fuel Systems Card is an excellent option for Owner operators
          and Small Trucking Companies who want to manage their fuel expenses
          wisely. This fuel card helps to save money on fuel costs by offering
          some of the most competitive discounts at participating stations
          throughout the USA.
        </p>
        <p>
          US Fuel Systems Card clients can save on average of up to 35-40 cents
          per gallon, making it significantly easier to keep costs low while
          operating a trucking business. Flexible payment options with the US
          Fuel Systems Fuel Card allow businesses to manage their expenses in a
          way that suits their financial objectives. Clients may opt to pay
          their fuel bills in full each month or choose from a range of
          pre-designed payment plans. the US Fuel Systems Card is an excellent
          choice for Owner operators and Small Trucking Companies to save big on
          fuel costs.
        </p>
      </div>
      <div className="image">
        <img src={Card} className="info-card" alt="card" />
      </div>
    </div>
  );
}

export default AboutCards;
