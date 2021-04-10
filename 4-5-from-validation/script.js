let form = document.getElementById("form")
let username = document.getElementById("username")
let password = document.getElementById("password")
let messageblock = document.getElementById("messages")

console.log(password);


// form.addEventListener( "submit", e => {
//     e.preventDefault();
//     let username = e.target[0].value;
//     let password = e.target[1].value;
//     let messages = [];
//     if(username === "" || username === null){
//         messages.push("<p>username is required</p>")
//     }
//     if(password === "" || password === null){
//         messages.push("<p>password is required</p>")
//     }
//     if(password.length <6){
//         messages.push("<p>password should be minimum 6 charectors...</p>")
//     }
//     var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//     if(!regex.test(password)){
//         messages.push("<p> min 8 letter password, with at least a symbol, upper and lower case letters and a number</p>")
//     }
//     if(messages.length > 0){
//         messageblock.innerHTML = messages.join("");
//         // console.log(messages);
//     }
//     else{
//         console.log({username,password});
//     }
//     e.target[0].value = "";
//     e.target[0].value = "";

// });

// let p = document.createElement("p");
// username.addEventListener("keyup", e => {
//     let uname = e.target.value;
//     if(uname.length > 6){
//         //valid message
//         username.style.color = "green";
//         username.style.border = "1px solid green";
//         p.innerHTML = `<p style="color:green">valid username</p>`
//     }
//     else{
//         username.style.color = "red";
//         username.style.border = "1px solid red";
//         p.innerHTML = `<p style="color:red">invalid username</p>`;
//     }
//     username.parentElement.appendChild(p);
// })

// let button = document.querySelector("button")
// console.log(button);
// button.disabled = true;
// button.style.cursor = "not-allowed";
// button.style.opacity = "0.3";


//

let button = document.querySelector("button");
form.addEventListener("input", e => {
    if(username.value.length > 6 && password.value.length > 6){
        button.disabled = false;
    }
    else{
        button.disabled = true;
    }
})