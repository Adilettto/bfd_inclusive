import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Form, Route, Routes } from "react-router-dom";
import Advantage from "./components/Advantage/Advantage";
import AboutCards from "./components/AboutCards/AboutCards";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/fuelCard" element={<AboutCards />} />
        <Route path="/discount" element={<ContactUs />} />
        <Route path="/apply" element={<Advantage />} />
        <Route path="/contacts" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
