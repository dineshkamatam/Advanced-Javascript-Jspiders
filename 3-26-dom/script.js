// // let div = document.createEleme

// let form = document.createElement("form");
// form.method = "GET";
// form.action = "#";

// //username label 
// let userLable = document.createElement("label");
// userLable.htmlFor = "userName";
// userLable.innerHTML = "User Name";

// //input 
// let userInput = document.createElement("input");
// userInput.type = "text";
// userInput.name = "userName";
// userInput.id = "userName";
// userInput.placeholder = "Enter ur name";

// //password label 
// let passwordLable = document.createElement("label");
// passwordLable.htmlFor = "password";
// passwordLable.innerHTML = "password";

// //password
// let userPassword = document.createElement("input");
// userPassword.type = "password";
// userPassword.name = "password";
// userPassword.id = "password";
// userPassword.placeholder = "Enter ur password";

// //button
// let btn = document.createElement("button");
// btn.textContent = "login";
// //br
// let br = document.createElement("br");

// form.appendChild(userLable);
// form.appendChild(userInput);
// form.appendChild(passwordLable);
// form.appendChild(userPassword);
// form.appendChild(btn);
// document.body.appendChild(form);    



//DOM events 

// let btn = document.getElementById("btn");


// btn.addEventListener("click", (e) => {
//     console.log("btn is clicked");
//     console.log(e);
//     console.log(e.target.textContent);
// })

let templet = document.getElementById("tem");

templet.addEventListener("mouseenter",(e) => {
    templet.style.backgroundColor = "red";
})
templet.addEventListener("mouseleave",(e) => {
    templet.style.backgroundColor = "aqua";
})