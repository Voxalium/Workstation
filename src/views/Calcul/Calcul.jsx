import { NavLink } from "react-router-dom";
export default function Calcul() {
  return (
    <main className="Calcul ">
      <div className="container column align-center justify-center">
        <div className="links column justify-center ">
          <NavLink to="/calcul/mix">Mix</NavLink>
          <NavLink to="/calcul/addition">Addition</NavLink>
          <NavLink to="/calcul/substraction">Substraction</NavLink>
          <NavLink to="/calcul/multiplication">Multiplication</NavLink>
          <NavLink to="/calcul/division">Division</NavLink>
        </div>
      </div>
    </main>
  );
}
