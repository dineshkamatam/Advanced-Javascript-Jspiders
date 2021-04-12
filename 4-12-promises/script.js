//promises

// let promise = new Promise((resolve, reject) => {
//   let isJavaScriptGoot = false;
//   if (isJavaScriptGoot) {
//     resolve("yes i love javascript!"); // resolve function for fullfilled
//   } else {
//     reject("i dont like javascript"); // reject function for rejected value
//   }
// });

// //promise prototype methods
// // then and catch

// // promise.prototype.then(); //executing successfully completed value
// // promise.prototype.catch(); //executing rejected value

// promise.then((data) => {
//   console.log(data); //resolve block
// });

// promise.catch((err) => {
//   console.log(err); // reject block
// });

new Promise((resolve, reject) => {
  let roomCleaned = true;
  if (roomCleaned) {
    resolve("yes room cleaned i will go to watch IPL match");
  } else {
    reject("opps i need to clean then i will watch IPL ");
  }
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Set timeout method

window.setTimeout(() => {
  var x = 10;
  console.log(x);
}, 5000);

let y = 20;
console.log(y);

// setInterval method
let v = 0;

let interval = setInterval(() => {
  if (v === 10) {
    clearInterval(interval);
  }
  document.body.innerHTML = `<h1>${v++}</h1>`;
}, 1000);



let accessWebsite = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("accessed website🕸️");
  }, 1000);
  setTimeout(() => {
    reject("oops page is not loading ...something went wrong!!");
  }, 10000);
});


accessWebsite
  .then((data) => console.log(data))
  .catch((err) => console.log(err));