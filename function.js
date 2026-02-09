// function calculate(a, b, operation) {
//   switch (operation) {
//     case "add":
//       return a + b;

//     case "sub":
//       return a - b;

//     case "mul":
//       return a * b;

//     case "div":
//       if (b === 0) {
//         return "Error: Division by zero";
//       }
//       return a / b;

//     default:
//       return "Invalid operation";
//   }
// }
// console.log(calculate(10, 5, "add")); // 15
// console.log(calculate(10, 5, "sub")); // 5
// console.log(calculate(10, 5, "mul")); // 50
// console.log(calculate(10, 5, "div")); // 2


function greet(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greet, 1500, "Pranshul");
