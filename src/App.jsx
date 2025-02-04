import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import HostelsPage from "./HostelsPage";
import AboutPage from "./AboutPage";
import Footer from "./Footer"; 
import useDarkMode from "./useDarkMode";
import "./index.css";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Router>
      <div className={darkMode ? "app dark-mode" : "app light-mode"}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hostels" element={<HostelsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;