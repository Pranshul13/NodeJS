// console.log("1");

// const getConsole = () => {
//     console.log("2");

//     setTimeout(() => {
//         console.log("3");
//     }, 2000);

//     setTimeout(() => {
//         console.log("3a");
//     }, 1000);
// };

// getConsole();

// for (let i = 0; i <= 500; i++) {}

// console.log("4");
// console.log("4");


// export function greet() {//name export
//   console.log("Hello");
// }

// // export default function add(a, b) {//default export
// //   return a + b;
// // }

// const multi = (a, b) => {//default export
//   return a * b;
// }

// export default multi;


//single export
// const add = require("./util.js");//common js import
// console.log(add(5, 10));


//destructuring
// const { add, multi, sub } = require("./util.js");//common js import
// console.log(add(5, 10));
// console.log(multi(5, 10));
// console.log(sub(5, 10));

// //object import
// const math = require("./util.js");//common js import
// // console.log(math.add(5, 10));
// // console.log(math.multi(5, 10));
// // console.log(math.sub(5, 10));


// //square bracket notation import
// console.log(math["add"](5, 10));
// console.log(math["multi"](8, 10));
// console.log(math["sub"](5, 20));

// const count = require("./counter.js");//common js import
// console.log(count);
// const count1 = require("./counter.js");//common js import
// console.log(count);

const count = require("./counter.js");//common js import
console.log(count);

