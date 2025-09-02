import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import NavbarComponent from "./NavbarComponent";
import ZooSlider from "./ZooSlider";
import History from "./pages/History";
import Animals from "./pages/Animals";
import Shows from "./pages/Shows";
import Contacts from "./pages/Contacts";
import PageWrapper from "./components/PageWrapper";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><ZooSlider /></PageWrapper>} />
        <Route path="/history" element={<PageWrapper><History /></PageWrapper>} />
        <Route path="/animals" element={<PageWrapper><Animals /></PageWrapper>} />
        <Route path="/shows" element={<PageWrapper><Shows /></PageWrapper>} />
        <Route path="/contacts" element={<PageWrapper><Contacts /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <NavbarComponent />
      <AnimatedRoutes />
    </Router>
  );
}
