import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Home/Homepage";
import HealthCheck from "./pages/HealthCheck/HealthCheck";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/healthcheck" element={<HealthCheck />} />
      </Routes>
    </div>
  );
}

export default App;
