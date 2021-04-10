let form = document.getElementById("signinForm");
let pno = document.getElementById("pno");
let password = document.getElementById("password");

// let UserNames = [];
form.addEventListener("submit", e => {
    // e.preventDefault();
    let pnoValue = pno.value;
    let locValue = window.localStorage
    if(locValue.hasOwnProperty(pnoValue)){
        let locValueObj = window.localStorage.getItem(pnoValue);
        let array = locValueObj.split(",");
        if(password.value !== array[3]){
            alert("wrong password")
        }
        else{
            form.setAttribute("action","../index.html")
        }
        
    }
    else{
        alert("Your are not registerd")
    }






})