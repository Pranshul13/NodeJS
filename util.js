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


const count = require("./counter.js");//common js import
const funOnDiffPage = () => {
    console.log("count on different page", count);
}

module.exports = funOnDiffPage;