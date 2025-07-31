

import "./Navbar.css";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        onClick={() => setPage("home")}
        style={{ cursor: "pointer" }}
      >
        START FRAMEWORK
      </div>
      <ul className="navbar-links">
        <li>
          <button onClick={() => setPage("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => setPage("about")}>About</button>
        </li>
        <li>
          <button onClick={() => setPage("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;