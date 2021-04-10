//splice method 
// let x = ["java","pyhton","nodejs","JavaScript"];

// let deletdvalue = x.splice(1,1);
// console.log(deletdvalue);
// console.log(x);

// x.splice(2,0,"react js");
// console.log(x);


//forEach method 

// let languages = ["java","pyhton","nodejs","JavaScript","angular"];

// let length = languages.length; //length is a array property 
// // console.log(length)

// for(let i = 0; i < languages.length ; i++){
//     if(languages[i] === "nodejs"){
//         continue;
//     }
//     else{
//         console.log(languages[i]);
//     }
// }


//loop over an array by using array helper method 
// languages.forEach((value,index,array) => {
//     // console.log(array);  //it looped array length times
//     // console.log(index);  //it is printing array index 
//     // console.log(value);  // it is looping array values 
//     if(value !== "php"){
//         continue; //
//         // Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement
//     }
// })

// forEach is not returning value and not creating new array
// forEach is not supporting method chain 

// ==========  Array.prototype.map() ============
// let map = languages.map(function (value,index,array){
//     return value;
// }).map( x => console.log(x))

// console.log(map);


// another example
// let x = [10,10,30,40,30,100];
// let y = x.forEach(value => value *2); // it wont work 
// console.log(y); // undefined 
// console.log(x);

// let map  = x.map(x => x*2).forEach(x => console.log(x))

// console.log(map);


// ===============Array.prototype.filter()===============
// let users = ["shahsi","shashikunal","deepak","shishira"];
// let filterdCantent = users.filter(vale => {
//   return  vale.length > 8;
// } )

// console.log(filterdCantent);

// let products = [
//     {
//         id:1,
//         name: "t-shirt",
//         price: 200
//     },
//     {
//         id:2,
//         name: "shirt",
//         price: 501
//     },
//     {
//         id:3,
//         name: "phant",
//         price: 800
//     },
//     {
//         id:4,
//         name: "kurtha",
//         price: 600
//     },
//     {
//         id:5,
//         name: "adfa",
//         price: 400
//     },
// ]

// let output = "";
// products.map( x => {
//     output += `<li>${x.name}</li><li>${x.price}</li>`;
// })

// let ul = document.getElementById("ul");
// ul.innerHTML = output;
// let btn1 = document.getElementById("below500");

// btn1.addEventListener("click", e => {
//     let below500 = products.filter(x => x.price < 500);
//     console.log(below500);

// })


let languages = [
    "JavaScript",
    "JavaScript",
    "JavaScript",
    "JavaScript",
    "java",
    "java",
    "java",
    "java",
    "java",
    "pyhton",
    "pyhton",
    "pyhton",
    "pyhton",
    "pyhton",
]



// let java = languages.filter(value => value === "java")
// console.log(java);


let filterdCantent = languages.filter((value , index,array) => {
    return array.indexOf(value) === index;
});

console.log(filterdCantent);

let ul = document.getElementById("ul");

let menus = "";
filterdCantent.forEach( lang => {
    menus += `<li><a href="/">${lang}</a></li>`;
});

ul.innerHTML = menus;

ul.addEventListener("click", e => {
    e.preventDefault()
    console.log(e.target.textContent);
});