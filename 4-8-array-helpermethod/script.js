// sort method 
// let x = ["shashi", "manu", "arun","bhuvi", "zee"];
// let numbers = [10,200,20,500,34,423,56];

// console.log(x);

// let sortedIt = x.sort();  //string with UTF16 unicode 
// console.log(sortedIt);
// console.log(numbers);
// //sort number 

// let sortNumber = numbers.sort((a,b) => a-b)
// console.log(sortNumber);



//reduce method 

// let y = [10,20,200,400,30,50] // 710 
// let reduceIt = y.reduce((prevValue, currentValue) => {
//     console.log(prevValue);
//     console.log(currentValue);
//     return prevValue+currentValue ;
// })

// console.log(reduceIt);

//below is the very important for interview 
//using reduce method for two dimentional array
// let z = [[1],[2],[3],[4]]
// console.log(z);

// let combineArray = z.reduce( (prevValue,currentValue) => {
//     return prevValue.concat(currentValue)
// }).reduce((accumulator,currentValue) => {
//     return accumulator+currentValue;
// });+

// console.log(combineArray);


//for indefinite number of depth 

// let a = [[1],[2],[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[6]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],[3],[4]]; //16

// //ES2019 
// // Array.Flat();

// let singleArray = a.flat(Infinity);
// console.log(singleArray);
// console.log(typeof singleArray);
// console.log(Array.isArray(singleArray));

// let rdcIT = singleArray.reduce((accumulator,currentValue) => {
//     return accumulator+currentValue ;
// })

// console.log(rdcIT);


let b = ["S","H","A","S","H","I"];
console.log(b);
//left to right
let reduceIT = b.reduce((prevVale,currentValue) => {
    return prevVale+currentValue;
})

console.log(reduceIT);


//right to left 
let f = ["I","H", "S","A","H","S"];
console.log(f);

let reduceRight = f.reduceRight((accumulator,currentValue) => {
    return accumulator+currentValue
})

console.log(reduceRight);


//fill method  

let g = new Array(1000);
let y = new Array("1000");

let z = Array(1000);
console.log(g);
console.log(y);
console.log(z);

let fill = g.fill("shashi");
let output = "";
fill.forEach( x => {
    output += x;
});
console.log(output);

let h = ["shashi","manu","anu"];
let fillStaticValue = x.fill("shishira",1)
console.log(fillStaticValue);