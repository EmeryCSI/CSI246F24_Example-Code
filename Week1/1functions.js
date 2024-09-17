//traditional
function add(a, b) {
  return a + b;
}
//make a variable for the function
const sum = function (a, b) {
  return a + b;
};

//(a, b) go to the following function body
const addition = (a, b) => {
  return a + b;
};

const oneLine = (a, b) => a + b;
//if only one parameter you can drop the paranthesis
const oneParam = (a) => a + a;
//If there are no paramaters you need parentesis
const print = () => console.log("Hello from print");
print();
