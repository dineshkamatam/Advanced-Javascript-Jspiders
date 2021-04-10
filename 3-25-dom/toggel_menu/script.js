let nav = document.getElementById("nav");
let close = document.getElementById("close");

close.onclick = function(){
    nav.classList.toggle("active");
    close.classList.toggle("aa");
    if(nav.classList.contains("active")){
        close.classList.remove("fa-times");
        close.classList.add("fa-bars");
    }
    else{
        close.classList.add("fa-times");
        close.classList.remove("fa-bars");
    }
   
}