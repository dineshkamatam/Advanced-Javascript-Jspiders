let btn = document.getElementById("btn")
let toggl = document.getElementById("toggl")

console.log(toggl);

btn.addEventListener("mouseenter", (e) => {
   toggl.classList.toggle("show")
//    btn.classList.add("show")
   console.log(e);
})
btn.addEventListener("mouseleave", (e) => {
   toggle.classList.remove("show")
//    btn.classList.remove("show")
})