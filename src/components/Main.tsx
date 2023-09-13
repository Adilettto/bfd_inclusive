import React from "react";
import "./Main.scss";
import gasBox from "../assets/Gas-box.png";

const Main = () => {
  return (
    <div className="main">
      <h1 className="main-text">Fuel now, Pay later No Monthly Fee!</h1>
      <div className="main-btns">
        <button className="request">Request a card info</button>
        <button className="apply">Apply for a card</button>
        <p>
          We offer wide range of fule cards for various types of machinery and
          equipment.
        </p>
        <img className="main-img" src={gasBox} alt="fuel-box" />
      </div>
    </div>
  );
};

export default Main;
