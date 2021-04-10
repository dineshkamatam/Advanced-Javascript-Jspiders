// Array.prototype.find();
let x = [10,70,20,200,500,400];
let filterdContent = x.filter( value =>  value>60)


console.log(filterdContent);
let findIt = x.find( value =>  value>60)
console.log(findIt);

//another example 

let users = [
    {
        name: "manu",
        age: 20,
        company: "testyanthra"
    },
    {
        name: "dinesh",
        age: 23,
        company: "infosys"
    },
    {
        name: "ramesh",
        age: 24,
        company: "google"
    },
    {
        name: "suresh",
        age: 24,
        company: "infosys"
    },
    {
        name: "rajesh",
        age: 26,
        company: "accenture"
    },
]



let find = users.find(val => val.company === "infosys")
console.log(find);

//it will print only related to condition 
//if you want more occarances go with filter 
let findWithfiter = users.filter(val => val.company === "infosys")
console.log(findWithfiter);



// Array.prototype.includes()
//it return boolean values 
let user = ["shashi","manu","shishira"];
if(user.includes("shashi")){
    console.log("shahi item is there in array");
}else{
    console.log("shashi is not there please add it");
}


// Array.prototype.every() 
let products = [
    {
        name: "shirt",
        price : 3000,
        availability : true,
    },
    {
        name: "pant",
        price : 3000,
        availability : true,
    },
    {
        name: "kurtha",
        price : 3000,
        availability : false,
    }
]


let everyItem = products.every(products =>  {
    return products.availability === true
})

if(everyItem === true){
    console.log("products are available");
}
else{
    console.log("out of stock");
}



// Array.prototype.entries()
let k = ["java","JavaScript"];

for(let i of k.entries()){
    console.log(i);
    console.log(k[i]);
}


//key and values method 
let keys = k.keys();
let values = k.values();

for(let i of keys){
    console.log(i)
}
for(let i of values){
    console.log(i)
}

//slice method 

let user = ["shashi","manu","shishira"];

let sliceIt = user.slice(1,3)

console.log(sliceIT);