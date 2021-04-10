
// let div = document.getElementsByTagName("div");
// console.log(div);

//using for method

// for(let i = 0;i<div.length;i++){
//     div[i].className = "block-"+i;
//     console.log(div[i]);
// }

//======================
//using forEach emthod
// [...div].forEach((value,index)  => {
//     value.className = "block-"+index;
//     console.log(value);
// })


//================
//using MAP method
// [...div].map((value,index)  => {
//     value.className = "block-"+index;
//     console.log(value);
// })

//===================
// //using for of
// for(let i of div){
//     i.className = "block-"+i;
//     console.log(i);
// }



//clasList 
//imp: classList vs className
// let demo = document.getElementById("demo");
// demo.classList.add("dinesh","ramessh","suresh");
// demo.classList.remove("suresh")
// console.log(demo);

//==================================
// let shwbtn = document.getElementById("shwbtn");
// let hidebtn = document.getElementById("hidebtn");
// let templet = document.getElementById("templet");

// shwbtn.onclick = (e) => {
//     console.log("show btn clicked");
//    templet.classList.add("active")
// } 
// hidebtn.onclick = (e) => {
//     console.log("hide btn clicked");
//    templet.classList.remove("active")
// } 

//===================
//another method using toggel
let btn = document.getElementById("btn");
let templet = document.getElementById("templet");

btn.onclick = (e) => {
   templet.classList.toggle("active");
(templet.classList.contains("active"))?btn.textContent="hide":btn.textContent="show";

} 