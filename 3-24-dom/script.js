// let demo = document.querySelector("#demo"); //css selector 
// let span = document.querySelectorAll(".block"); //it matches all element which is having 

// console.log(demo);
// console.log(span);
// span.forEach(x => console.log(x));



///how to add attributes  in DOM 

// document.body.className="body";
// document.body.title="this is body";
// document.body.id= "demo";
// document.body.style.backgroundColor= "blue";


let demo = document.querySelector("#demo");
// demo.className = "demo";
// demo.style.height = "300px";
// demo.style.width = "300px";
// demo.style.backgroundColor = "black";
// demo.style.color = "white";
// demo.title = "this is demo";

// DOM builtin method setAttribute()
demo.setAttribute("class","demo");
demo.setAttribute("title","this the title yoyo");
demo.setAttribute("style","color:red");
demo.setAttribute("chombu","this set attribute can add anything we wrrite here");


//DOM builtin method getAttribute();
let test = demo.getAttribute("class");
let getTitle = demo.getAttribute("title");
console.log(test);
console.log(getTitle);


//DOM builtin method removeAttribute() 
demo.removeAttribute("title")
console.log(demo);