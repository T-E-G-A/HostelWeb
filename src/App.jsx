import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HostelsPage from "./pages/HostelsPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer"; // Import Footer
import useDarkMode from "./hooks/useDarkMode";
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
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;