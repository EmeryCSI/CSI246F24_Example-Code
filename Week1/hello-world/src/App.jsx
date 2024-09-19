import Heading from "./components/Heading";
import State from "./components/State";
//A component is javascript function that matches the file name
const App = () => {
  //A component is split in two pieces
  //before the return statement and after
  //before the return statement I can write any JS I want
  let numbers = [1, 2, 3];
  console.log(numbers);
  const APP_NAME = "My First React App";
  //lets see if we can pass a function from App.jsx to Heading.jsx
  const popup = () => {
    alert("Pop-up");
  };
  const addNumber = () => {
    numbers.push(numbers.length + 1);
    console.log(numbers);
  };
  return (
    <div>
      <h1>{APP_NAME}</h1>
      <Heading
        heading="The Heading"
        text="Some Text"
        clickHandler={popup}
        addNumber={addNumber}
      ></Heading>
      <State></State>
    </div>
  );
};
export default App;
