import { useState } from "react";
import { Add, Div, getRandomInt, Mul, Sub } from "../../scripts/calcul";
export default function MakeCalcul({op, attempts=5}) {
  const n = getRandomInt();
  const [score, setScore] = useState(0); 
  const [test, setTest] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  let res = 0;
  let calcString = "";
  switch(op){
    case "+":
      res = Add(n.a,n.b) ;
      calcString = `${n.a} + ${n.b}`;
    break;
    case "-":
      res = Sub(n.a,n.b) ;
      calcString = `${n.a} - ${n.b}`;
    break;
    case "*":
      res = Mul(n.a,n.b) ;
      calcString = `${n.a} * ${n.b}`;
    break;
    case "/":
      res = Number(Div(n.a,n.b).toFixed(2)); ;
      calcString = `${n.a} / ${n.b}`;
    break;
    case "Mix":
      res = Add(n.a,n.b) ;
    break;
    default:
      return console.error("Operator not set !");      
  }


  function checkRes(){
    setTest(test+1);

    const guessInput = Number(document.querySelector("#guess").value); 
    if(guessInput === res){
      setIsCorrect(true)
      setScore(score+1);
    } else setIsCorrect(false); 

    document.querySelector("#guess").value = "";

  }

  if(test !==attempts) {

    return(
    <main className="MakeCalcul">
        
      <h1>Score:{score}</h1>
      <h2>Test:{test}/{attempts}</h2>
      <div className="container column full-center">
        <p>{calcString}</p>
        <form action="" className="guess-form">
          <label htmlFor="guess">Guess : </label>
          <input type="text" name="guess" id="guess"/>
          <input type="submit" value="Guess" onClick={(e)=>{
            e.preventDefault();
            checkRes()
          }} />
          {isCorrect === false && <p>Wrong</p>}
               </form>
      </div>
    </main>
  );
  } else return (
  <main className="MakeCalcul">
    <h1>Score:{score}/{attempts}</h1>
  </main>
  )    
}
