import { NavLink } from "react-router-dom";
export default function Test() {
  return (
    <main className="Test ">
      <div className="links column align-center justify-center">
        <NavLink to="/test/mix">Mix</NavLink>
        <NavLink to="/test/addition">Addition</NavLink>
        <NavLink to="/test/substraction">Substraction</NavLink>
        <NavLink to="/test/multiplication">Multiplication</NavLink>
        <NavLink to="/test/division">Division</NavLink>
      </div>
    </main>
  );
}
