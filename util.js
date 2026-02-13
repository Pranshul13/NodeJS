
// import { greet } from "./index.js";//name import

// greet();

// // import add from "./index.js";//default import
// // console.log(add(5, 10));

// import multi from "./index.js";//default import
// console.log(multi(5, 10));

// import { multi as multiply } from "./functions/function.js";//named import
// console.log(multiply(8, 10));

// import fs from "fs";//core module import
// console.log("File System Module Imported");
// const data  = fs.readFileSync("file.txt", "utf-8");
// console.log("File Read Successfully");
// console.log(data);
// console.log("End of File");



// import fs from "fs";//core module import
// console.log("File System Module Imported");
// const data  = fs.readFileSync("file.txt", "utf-8",(err,output)=>{
//     if(err) {
//         console.log("error",err);
        
//     }
//     console.log("Successfully",output);
// });
// console.log("File Read Successfully");
// console.log(output);
// console.log("End of File");
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// const dynamicPath = path.join(__dirname, "file.txt");
// console.log(dynamicPath);

// const filePath = "file.txt";
// fs.readFile(filePath, "utf-8",(err,data)=>{
//     console.log(data);
// });    


// const math = {
//     add: (a, b) => {
//         return a + b;
//     },
//     multi: (a, b) => {
//         return a * b;
//     },
//     sub: (a, b) => {
//         return a - b;
//     }
// };

//destructuring
// module.exports = {
//     add,
//     multi,
//     sub
// };

//single export
// module.exports = add;

//object export
// module.exports = math;


//priority of export
//.js
//.json
//folder

// only a single require statement is allowed in a file, if we use multiple require statements then only the first one will be executed and the rest will be ignored.


// const count = require("./counter.js");//common js import
// const funOnDiffPage = () => {
//     console.log("count on different page", count);
// }

// module.exports = funOnDiffPage;
// import { greet } from "./index.js";//name import

// greet();

// // import add from "./index.js";//default import
// // console.log(add(5, 10));

// import multi from "./index.js";//default import
// console.log(multi(5, 10));

// import { multi as multiply } from "./functions/function.js";//named import
// console.log(multiply(8, 10));

// import fs from "fs";//core module import
// console.log("File System Module Imported");
// const data  = fs.readFileSync("file.txt", "utf-8");
// console.log("File Read Successfully");
// console.log(data);
// console.log("End of File");



// import fs from "fs";//core module import
// console.log("File System Module Imported");
// const data  = fs.readFileSync("file.txt", "utf-8",(err,output)=>{
//     if(err) {
//         console.log("error",err);
        
//     }
//     console.log("Successfully",output);
// });
// console.log("File Read Successfully");
// console.log(output);
// console.log("End of File");
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// const dynamicPath = path.join(__dirname, "file.txt");
// console.log(dynamicPath);

// const filePath = "file.txt";
// fs.readFile(filePath, "utf-8",(err,data)=>{
//     console.log(data);
// });    


// const math = {
//     add: (a, b) => {
//         return a + b;
//     },
//     multi: (a, b) => {
//         return a * b;
//     },
//     sub: (a, b) => {
//         return a - b;
//     }
// };

//destructuring
// module.exports = {
//     add,
//     multi,
//     sub
// };

//single export
// module.exports = add;

//object export
// module.exports = math;


//priority of export
//.js
//.json
//folder

// only a single require statement is allowed in a file, if we use multiple require statements then only the first one will be executed and the rest will be ignored.


// const count = require("./counter.js");//common js import
// const funOnDiffPage = () => {
//     console.log("count on different page", count);
// }

// module.exports = funOnDiffPage;

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello from Node.js Server 🚀");
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// function first() {
//     second();
//     console.log("First function executed");
       
// }

// function second() {
       

//     console.log("Second function executed");
//     third(); 
// }

// function third() {
//     console.log("Third function executed");
// }


// first();


// function add(a, b) {
//     let sum = a + b;
//     sub(sum, 5);   
//     console.log("Addition:", sum);
// }

// function sub(a, b) {
//     let result = a - b;
//     mul(result, 2);   
//     console.log("Subtraction:", result);
// }

// function mul(a, b) {
//     let result = a * b;
//     console.log("Multiplication:", result);
// }


// add(10, 5);

// console.log("Start");

// setTimeout(() => {
//     console.log("Inside Timeout");
// }, 2000);


// console.log("End");


// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout 1 - 0ms");
// }, 0);

// setTimeout(() => {
//     console.log("Timeout 2 - 1000ms");
// }, 1000);

// setTimeout(() => {
//     console.log("Timeout 3 - 500ms");
// }, 500);

// console.log("End");

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout 1");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise 1");
// });

// setTimeout(() => {
//     console.log("Timeout 2");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise 2");
// });

// console.log("End");



//callstack overloading example
// function test() {
//     console.log("Running...");
//     test();   // calling itself again and again
// }

// test();



//callback example
// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Pranshul", sayBye);



// //Pramoise example
// const myPromise = new Promise((resolve, reject) => {
    
//     let success = true;

//     if (success) {
//         resolve("Task completed");
//         Console.log("Promise resolved");
//     } else {
//         reject("Task failed");
//         Console.log("Promise rejected");
//     }
// });

// myPromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// function checkId() {
//     return new Promise((resolve) => {
//         resolve("ID OK");
//     });
// }

// function checkName() {
//     return new Promise((resolve) => {
//         resolve("Name OK");
//     });
// }

// function login() {
//     return new Promise((resolve) => {
//         resolve("Login Success");
//     });
// }

// // call one by one

// checkId()
//     .then(msg => {
//         console.log(msg);
//         return checkName();
//     })
//     .then(msg => {
//         console.log(msg);
//         return login();
//     })
//     .then(msg => {
//         console.log(msg);
//     })
//     .catch(err => {
//         console.log("Error:", err);
//     });


//catch should be at the end of the promise chain to catch any error that occurs in any of the promises in the chain. 
// If we place catch in the middle of the chain, it will only catch errors that occur in the promises before it, 
// and any errors that occur in the promises after it will not be caught. Therefore, it is best practice to place 
// catch at the end of the promise chain to ensure that all errors are properly handled.


// //async await example
// const getNumber = () => {
//     return new Promise((resolve) => {
//         resolve(10);
//     });
// };

// const calculate = async () => {
//     let num = await getNumber();
//     console.log(num);
// };

// calculate();


const step1 = () => Promise.resolve("Step 1 Done");
const step2 = () => Promise.resolve("Step 2 Done");
const step3 = () => Promise.resolve("Step 3 Done");

const runSteps = async () => {

    console.log("Running Steps...");
    let a = await step1();
    console.log(a);

    let b = await step2();
    console.log(b);

    let c = await step3();
    console.log(c);
};
console.log("Start");
runSteps();
console.log("End");
