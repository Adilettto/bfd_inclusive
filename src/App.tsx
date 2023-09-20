import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Advantage from "./components/Advantage/Advantage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Advantage />} />
        <Route path="/home" element={<Advantage />} />
        <Route path="/apply" element={<NavBar />} />
        <Route path="/contacts" element={<NavBar />} />
        <Route path="/discount" element={<NavBar />} />
      </Routes>

    </div>
  );
}

export default App;
