import { NavLink } from "react-router-dom";
export default function Calcul() {
  return (
    <main className="Test ">
      <div className="links column align-center justify-center">
        <NavLink to="/calcul/mix">Mix</NavLink>
        <NavLink to="/calcul/addition">Addition</NavLink>
        <NavLink to="/calcul/substraction">Substraction</NavLink>
        <NavLink to="/calcul/multiplication">Multiplication</NavLink>
        <NavLink to="/calcul/division">Division</NavLink>
      </div>
    </main>
  );
}
