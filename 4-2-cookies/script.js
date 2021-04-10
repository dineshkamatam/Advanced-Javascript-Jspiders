//cookies 
// console.log(document.cookie);
// let cookie = document.cookie = "dinesh";
// console.log(cookie)

let username = (document.cookie = "userName = dinesh; expires =" + new Date("2021/04/03"));
let password = (document.cookie = "password = dinesh12");
let phno = (document.cookie = "phno = 7013179124");

console.log({username,password,phno});