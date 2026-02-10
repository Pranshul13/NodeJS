// 1. Normal (named) function
function add(a, b) {
  return a + b;
}

// 2. Function expression
const subtract = function (a, b) {
  return a - b;
};

// 3. Arrow function
const multiply = (a, b) => a * b;

// 4. Arrow function with block body
const divide = (a, b) => {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
};

// 5. Callback function
function calculate(a, b, operation) {
  return operation(a, b);
}

// 6. Async function
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
}

// 7. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed");
})();

// Using the functions
console.log("Add:", add(5, 3));
console.log("Subtract:", subtract(10, 4));
console.log("Multiply:", multiply(6, 2));
console.log("Divide:", divide(8, 2));

// Callback usage
const result = calculate(10, 5, add);
console.log("Callback Result:", result);

// Async function usage
fetchData().then((data) => {
  console.log(data);
});

// Async function usage
fetchData().then((data) => {
  console.log(data);
});
