// let form = document.getElementById("form")
// let input = document.getElementById("input")

// form.addEventListener("submit", e => {
//     console.log(e);
//     e.preventDefault();
//     let getInputValue = input.value;
//     console.log(getInputValue); 
//     //clear input once submit a from 
//     input.value = ""
// })


//web storage 
//localStorge and session storage
//setItem 
// window.localStorage.setItem("languages","react")  //key and values are must be stirng
// window.localStorage.setItem("js","JavaScript")  //key and values are must be stirng

// window.sessionStorage.setItem("languages","react")

//get item from local storage 
// let getVAlue = window.localStorage.getItem("languages");
// console.log(getVAlue);

//remove item from local storage 
// let removeItem = window.localStorage.removeItem("languages")


let form = document.getElementById("form")
let input = document.getElementById("input")
let templet = document.getElementById("data")
form.addEventListener("submit", e => {
    // e.preventDefault();
    let getValue = input.value;
    let getKey = input.value;
    window.localStorage.setItem(getKey,getValue);
    input.value = "";
});

// let value = Object.keys(window.localStorage);

// console.log(value);

// let output = "";
// value.forEach( (v,ind) => {
//     output += `<p>${ind+1} . ${v}</p>`;

// })
// templet.innerHTML= output;


let output = "";
for(let i in window.localStorage){
    let finalData = window.localStorage.getItem(i);
    if(finalData === null){
        console.log("no data present");
    }
    else{
        output += `<p>${finalData}</p>`;
    }
}
templet.innerHTML= output;