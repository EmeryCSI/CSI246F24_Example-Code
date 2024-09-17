const array1 = [2, 4, 6, 9];
//Callback function
function display(data) {
  console.log(data);
}
array1.forEach(display);
//In JavaScript we can make functions many different ways
array1.forEach((data) => console.log(data));

array1.forEach((element, index) => {
  console.log(`Element: ${element}`);
  console.log(`Index ${index}`);
});
