import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Add, Div, getRandomInt, Mul, Sub } from "../../scripts/calcul";
export default function MakeCalcul({ op }) {
  const nav = useNavigate();
  const n = getRandomInt();
  const [score, setScore] = useState(0);
  const [test, setTest] = useState(0);
  const [rounds, setRounds] = useState(10);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isRoundStarted, setIsRoundStarted] = useState(false);

  let res = 0;
  let calcString = "";
  switch (op) {
    case "+":
      res = Add(n.a, n.b);
      calcString = `${n.a} + ${n.b}`;
      break;
    case "-":
      res = Sub(n.a, n.b);
      calcString = `${n.a} - ${n.b}`;
      break;
    case "*":
      res = Mul(n.a, n.b);
      calcString = `${n.a} * ${n.b}`;
      break;
    case "/":
      res = Number(Div(n.a, n.b).toFixed(2));
      calcString = `${n.a} / ${n.b}`;
      break;
    case "Mix":
      res = Add(n.a, n.b);
      break;
    default:
      return console.error("Operator not set !");
  }

  function checkRes() {
    setTest(test + 1);

    const guessInput = Number(document.querySelector("#guess").value);
    if (guessInput === res) {
      setIsCorrect(true);
      setScore(score + 1);
    } else setIsCorrect(false);

    document.querySelector("#guess").value = "";
  }

  if (!isRoundStarted) {
    return (
      <main className="MakeCalcul">
        <div className="container column full-center">
          <h1>Set Rounds</h1>
          <form action="">
            <input type="text" name="rounds" id="rounds" />
            <input
              type="submit"
              id="submit"
              value="Validate"
              onClick={(e) => {
                e.preventDefault();
                setRounds(Number(document.querySelector("#rounds").value));
                setIsRoundStarted(true);
              }}
            />
          </form>
        </div>
      </main>
    );
  } else {
    if (test !== rounds) {
      return (
        <main className="MakeCalcul">
          <h1>Score:{score}</h1>
          <h2>
            Test:{test}/{rounds}
          </h2>
          <div className="container column full-center">
            <p>{calcString}</p>
            <form action="" className="guess-form">
              <label htmlFor="guess">Guess : </label>
              <input type="text" name="guess" id="guess" />
              <input
                type="submit"
                value="Guess"
                onClick={(e) => {
                  e.preventDefault();
                  checkRes();
                }}
              />
              {isCorrect === false && <p>Wrong</p>}
            </form>
          </div>
        </main>
      );
    } else
      return (
        <main className="MakeCalcul">
          <div className="container column full-center">
            <h1>
              Score:{score}/{rounds}
            </h1>

            <form action="">
              <input
                type="submit"
                value="Return"
                id="reset"
                onClick={(e) => {
                  e.preventDefault();
                  nav("/calcul");
                }}
              />
            </form>
          </div>
        </main>
      );
  }
}
