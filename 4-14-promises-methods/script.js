// let promise1 = new Promise((resolve, reject) => {
//   let language = "javascript";
//   if (language === "javascript") {
//     console.log("javascript is a good language");
//   } else {
//     console.log("javascript is not a good language ");
//   }
// });
// let promise2 = new Promise((resolve, reject) => {
//   let language = "java";
//   if (language === "java") {
//     console.log("java is a good language");
//   } else {
//     console.log("javasis not a good language ");
//   }
// });
// let promise3 = new Promise((resolve, reject) => {
//   let language = "Python";
//   if (language === "Python") {
//     console.log("Python is a good language");
//   } else {
//     console.log("Python is not a good language ");
//   }
// });
// Promise.all([promise1, promise2, promise3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// promise.then(data=>console.log(data)).catch(err=>console.log(err))

// Example For Promise.all()method

// let Roomclean = new Promise((resolve, reject) => {
//   let Roomclean = true;
//   if (Roomclean === true) {
//     console.log("yes room cleaned ready for next job");
//   } else console.log("oops still room is not cleaned then i will do nest job");
// });
// let WinIcecrean = new Promise((resolve, reject) => {
//   let icecream = true;
//   if (icecream === true) {
//     console.log("i won ice cream ");
//   } else console.log("hey first clean the room then i will give you ice cream");
// });
// let WatchIPL = new Promise((resolve, reject) => {
//   let WatchIPL = true;
//   if (WatchIPL === true) {
//     console.log("i have done my all jobs know i am going to watch ipl");
//   } else
//     console.log(
//       "my  mum is not giving the permission to watch ipl i have to do all jobs first"
//     );
// });
// Promise.all([Roomclean, WinIcecrean, WatchIPL])
//   .then((ipl) => console.log(ipl))
//   .catch((err) => console.log(err));

// //Promise.any() method opposite of all ,method

// let Roomclean = new Promise((resolve, reject) => {
//   let Roomclean = true;
//   if (Roomclean === true) {
//     console.log("yes room cleaned ready for next job");
//   } else console.log("oops still room is not cleaned then i will do nest job");
// });
// let WinIcecrean = new Promise((resolve, reject) => {
//   let icecream = true;
//   if (icecream === true) {
//     console.log("i won ice cream ");
//   } else console.log("hey first clean the room then i will give you ice cream");
// });
// let WatchIPL = new Promise((resolve, reject) => {
//   let WatchIPL = false;
//   if (WatchIPL === true) {
//     console.log("i have done my all jobs know i am going to watch ipl");
//   } else
//     console.log(
//       "my  mum is not giving the permission to watch ipl i have to do all jobs first"
//     );
// });
// Promise.any([Roomclean, WinIcecrean, WatchIPL])
//   .then((ipl) => console.log(ipl))
//   .catch((err) => console.log(err));

// //promise. allSettled() method

// let Roomclean = new Promise((resolve, reject) => {
//   let Roomclean = true;
//   if (Roomclean === true) {
//     console.log("yes room cleaned ready for next job");
//   } else console.log("oops still room is not cleaned then i will do nest job");
// });
// let WinIcecrean = new Promise((resolve, reject) => {
//   let icecream = true;
//   if (icecream === true) {
//     console.log("i won ice cream ");
//   } else console.log("hey first clean the room then i will give you ice cream");
// });
// let WatchIPL = new Promise((resolve, reject) => {
//   let WatchIPL = true;
//   if (WatchIPL === true) {
//     console.log("i have done my all jobs know i am going to watch ipl");
//   } else
//     console.log(
//       "my  mum is not giving the permission to watch ipl i have to do all jobs first"
//     );
// });
// Promise.allSettled([Roomclean, WinIcecrean, WatchIPL])
//   .then((ipl) => console.log(ipl))
//   .catch((err) => console.log(err));

// // Promise.race() method

let shashi = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("shashi won the race");
  }, 1000);
});
let shubham = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("shubham won the race");
  }, 100);
});
let Nikhil = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("nikhil won the race");
  }, 1000);
});
Promise.race([shashi, shubham, Nikhil])
  .then((race) => console.log(race))
  .catch((err) => console.log(err));
