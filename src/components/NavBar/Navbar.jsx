import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/test">Calcul</NavLink>
    </nav>
  );
}
