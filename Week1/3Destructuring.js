//spread and rest use ...
const array = [1, 2, 4];
const array2 = [4, 5, 6];
//... All of the elements in
const array3 = [...array, 10];

console.log(array3);

//rest operated allows you to take ANY number of parameters
const total = (a, b, ...rest) => {
  console.log(rest);
  return a + b;
};

total(1, 2, 4, 5, 6, 7, 8);

const student = {
  name: "Josh",
  phone: "123-456-7890",
  display: () => console.log("Student Function"),
};
//object destructuring
//This creates a name and a phone
const { name, phone } = student;
console.log(name);
console.log(phone);
//Destururing an object that comes in as a parameter
const stuDisplay = ({ name, phone, display }) => {
  console.log("Calling Display");
  console.log(`name is ${name}`);
  display();
};

stuDisplay(student);
