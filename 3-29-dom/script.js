//event delegating : this is import for interview
//without event delegation
// let li1 = document.getElementById("li1");
// let li2 = document.getElementById("li2");
// let li3 = document.getElementById("li3");
// let li4 = document.getElementById("li4");

// li1.addEventListener("click", e => {
//     console.log(e.target);
// })
// li2.addEventListener("click", e => {
//     console.log(e.target);
// })
// li3.addEventListener("click", e => {
//     console.log(e.target);
// })
// li4.addEventListener("click", e => {
//     console.log(e.target);
// })


//with event delegation  //to avaid multiple clicks

// let ul = document.getElementById("ul");
// ul.addEventListener("click", e => {
//     console.log(e.target);
// })


//event bubbling & event capturing 

let grandparent = document.getElementById("grandparent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

grandparent.addEventListener("click",e => {
    e.stopPropagation();
    console.log("grandparent clicked");
},false)

parent.addEventListener("click",e => {
    e.stopPropagation();
    console.log("parent clicked");
},false)

child.addEventListener("click",e => {
    e.stopPropagation();
    console.log("child clicked");
},false)