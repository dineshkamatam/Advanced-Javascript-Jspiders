let toggle = document.querySelector(".signin_toggle");
let signin_Button = document.querySelector(".signin");
console.log(signin_Button);

signin_Button.addEventListener("mouseenter", (e) => {
    toggle.classList.add("show")
    signin_Button.classList.add("abc")
})
signin_Button.addEventListener("mouseleave", (e) => {
    toggle.classList.remove("show")
    signin_Button.classList.remove("abc")
})
toggle.addEventListener("mouseenter", (e) => {
    toggle.classList.add("show")
    signin_Button.classList.add("abc")
})
toggle.addEventListener("mouseleave", (e) => {
    toggle.classList.remove("show")
    signin_Button.classList.remove("abc")
})
