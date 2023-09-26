import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Advantage from "./components/Advantage/Advantage";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContactUs />} />
        <Route path="/fuelCard" element={<ContactUs />} />
        <Route path="/discount" element={<ContactUs />} />
        <Route path="/apply" element={<Advantage />} />
        <Route path="/contacts" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
