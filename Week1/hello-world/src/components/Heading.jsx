//using object destructuring to extract out a heading
//and a text variable from whatever gets passed in here
function Heading({ heading, text, clickHandler, addNumber }) {
  //clickHandler();
  console.log("Heading");
  return (
    <div>
      <h1>{heading}</h1>
      <p>{text}</p>
      <button onClick={clickHandler}>Click Me</button>
      <button onClick={addNumber}>Add to Array</button>
    </div>
  );
}

export default Heading;
