// function longTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Long task completed");
//     }, 10000); // task needs 10 sec
//   });
// }

// function timeout(ms) {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error("❌ Operation timed out"));
//     }, ms);
//   });
// }

// async function runTask() {
//   try {
//     const result = await Promise.race([
//       longTask(),
//       timeout(5000) // allow only 5 sec
//     ]);

//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

runTask();

setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

