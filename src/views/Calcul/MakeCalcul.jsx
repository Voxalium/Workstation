import { Add, Div, getRandomInt, Mul, Sub } from "../../scripts/calcul";
export default function MakeCalcul({op}) {
  const n = getRandomInt();

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


  function checkRes(e){
    e.preventDefault();

    const guessInput = Number(document.querySelector("#guess").value); 
    if(guessInput === res){
      console.log("Good")
    } else console.log("Wrong!")

  }

  return (
    <main className="MakeCalcul">
      <div className="container column full-center">
        <p>{calcString}</p>
        <form action="" className="guess-form">
          <label htmlFor="guess">Guess : </label>
          <input type="text" name="guess" id="guess"/>
          <input type="submit" value="Guess" onClick={(e)=>{
            checkRes(e)
          }} />
        </form>
      </div>
    </main>
  );
}
