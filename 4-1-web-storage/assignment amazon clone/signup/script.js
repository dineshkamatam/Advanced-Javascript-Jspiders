let form = document.getElementById("signupForm");
let uname = document.getElementById("Uname");
let pno = document.getElementById("pno");
let email = document.getElementById("email");
let password = document.getElementById("password");

// let UserNames = [];
form.addEventListener("submit", e => {
    e.preventDefault();
    let unameValue = uname.value;
    let pnoValue = pno.value;
    let emailValue = email.value;
    let PassValue = password.value;
    let phnoformate = /^\d{10}$/;
    let mailFormate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let  passwordFormate = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if(uname.value !== "" && phnoformate.test(pno.value) === true && mailFormate.test(email.value) === true && passwordFormate.test(password.value) === true){
        window.localStorage.setItem(pnoValue,[unameValue,pnoValue,emailValue,PassValue]);
        alert("account created!!")
        uname.value = "";
        pno.value = "";
        email.value = "";
        password.value = "";
    } 
    else{
        alert("enter valid data!")
    }
    
})

