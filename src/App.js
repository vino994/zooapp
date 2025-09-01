// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ZooSlider from "./ZooSlider";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ZooSlider />} />
      </Routes>
    </Router>
  );
}

export default App;
