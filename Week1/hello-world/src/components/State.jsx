//State is enabled by a hook called useState
//we have to import it
import { useState } from "react";

function State() {
  //to use state we call useState(initialValue)
  //useState returns two things things in an array
  //it gives you the value of the variable and a function
  //for updating it
  const [number, setNumber] = useState(0);
  const clickHandler = () => {
    //This works in 99% of scenarios
    //instead of me passing (0 + 1)
    //instead I am passing a (0) => 0 + 1
    setNumber((number) => number + 1);
  };
  return (
    <div>
      <h2>State</h2>
      <p>The number is {number}</p>
      <button onClick={clickHandler}>Add 1 to number</button>
    </div>
  );
}

export default State;
