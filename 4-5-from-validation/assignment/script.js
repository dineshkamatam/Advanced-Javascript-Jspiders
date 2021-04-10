let form = document.getElementById("form")
let username = document.getElementById("username")
let password = document.getElementById("password")
let messageblock = document.getElementById("messages")
let button = document.querySelector("button")

let p = document.createElement("p");
username.addEventListener("keyup", e => {
    if(e.target.value.length > 6 ){
        //valid message
        username.style.backgroundColor = "#a1f18d50";
        username.style.border = "2px solid #6ef54c";
        p.innerHTML = `<p style="color:#6ef54c">valid username 😉👍</p>`;
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.opacity = "1.0";
 
    }
    else{
        username.style.backgroundColor = "#ff000050";
        username.style.border = "1px solid red";
        p.innerHTML = `<p style="color:red">invalid username 😔👎</p>`;
        button.disabled = true;
        button.style.cursor = "not-allowed";
        button.style.opacity = "0.3";
    }
    username.parentElement.appendChild(p);


})

var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

password.addEventListener("keyup", e => {
    let pass = e.target.value
    console.log(pass);
    if(regex.test(pass)){
        //valid message
        password.style.backgroundColor = "#a1f18d50";
        password.style.border = "2px solid #6ef54c";
        p.innerHTML = `<p style="color:#6ef54c">valid Password 😉👍</p>`
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.opacity = "1.0";
    }
    else{
        password.style.backgroundColor = "#ff000050";
        password.style.border = "1px solid red";
        p.innerHTML = `<p style="color:red">invalid Password 😔👎</p>`;
        button.disabled = true;
        button.style.cursor = "not-allowed";
        button.style.opacity = "0.3";
    }
    password.parentElement.appendChild(p);
})

username.addEventListener("focusout",e => {
    username.style.backgroundColor = "rgba(255, 255, 255, 0.301)";
    username.style.border = "2px solid rgba(255, 255, 255, 0.548)";
    password.style.backgroundColor = "rgba(255, 255, 255, 0.301)";
    password.style.border = "2px solid rgba(255, 255, 255, 0.548)";
    p.innerHTML = "";
});




