import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  function handleNav() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <nav
      className={`${isNavOpen ? "open" : "close"} NavBar column align-center`}
    >
      <button className="nav-button" onClick={handleNav}></button>
      <div className="links column">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/test">Calcul</NavLink>
        <NavLink to="/session">Session</NavLink>
        <NavLink to="/note">Note</NavLink>
      </div>
    </nav>
  );
}
