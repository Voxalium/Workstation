import { Add, RandomInt } from "../../scripts/calcul";
export default function Addition() {
  let a = RandomInt(10);
  let b = RandomInt(10);
  return (
    <main className="Addition">
      <div className="container column align-center">
        <p>{`${a} + ${b}`}</p>
      </div>
    </main>
  );
}
