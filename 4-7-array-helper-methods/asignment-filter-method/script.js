let products = [
    {
        id:1,
        name: "t-shirt",
        price: 200
    },
    {
        id:2,
        name: "shirt",
        price: 501
    },
    {
        id:3,
        name: "pant",
        price: 800
    },
    {
        id:4,
        name: "kurtha",
        price: 600
    },
    {
        id:5,
        name: "saree",
        price: 400
    },
    {
        id:6,
        name: "jeans",
        price: 1000
    },
    {
        id:7,
        name: "towel",
        price: 100
    },
    {
        id:8,
        name: "Neck-less-TShirt",
        price: 200
    },
]

console.table(products)

let output = "";
let ul = document.getElementById("ul");
let btn1 = document.getElementById("below500");
let btn2 = document.getElementById("above500");
let all = document.getElementById("all");
all.addEventListener("click", e => {
    output = ""
    products.map( (v,i) => {
        output += `<li>${i + 1} . ${v.name}--- price ${v.price}</li>`;
    })
    ul.innerHTML = output;
})
btn1.addEventListener("click", e => {
    let below500 = products.filter(x => x.price < 500);
    console.log(below500);
    output = ""
    below500.map( (v,i) => {
        output += `<li>${i+1} . ${v.name}--- price ${v.price}</li>`;
    })
    ul.innerHTML = output;  
})
btn2.addEventListener("click", e => {
    let above500 = products.filter(x => x.price > 500);
    console.log(above500);
    output = ""
    above500.map( (v,i) => {
        output += `<li>${i+1} . ${v.name}--- price ${v.price}</li>`;
    })
    ul.innerHTML = output;
})