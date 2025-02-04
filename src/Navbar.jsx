import { Link } from "react-router-dom";

export default function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Hostel Finder</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hostels">Hostels</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button onClick={toggleDarkMode} className="mode-toggle">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}