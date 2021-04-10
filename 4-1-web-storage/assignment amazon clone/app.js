let country_section = document.querySelector(".country-section");
let country_section_toggle = document.querySelector(".country-section-toggle");

console.log(country_section_toggle);

country_section.addEventListener("mouseenter", e => {
    country_section_toggle.classList.add("show");
})
country_section.addEventListener("mouseleave", e => {
    country_section_toggle.classList.remove("show");
})
country_section_toggle.addEventListener("mouseenter", e => {
    country_section_toggle.classList.add("show");
})
country_section_toggle.addEventListener("mouseleave", e => {
    country_section_toggle.classList.remove("show");
})




let account_section = document.querySelector(".account-section");
let account_section_toggle = document.querySelector(".account-section-toggle");

console.log(account_section_toggle);

account_section.addEventListener("mouseenter", e => {
    account_section_toggle.classList.add("show");
})
account_section.addEventListener("mouseleave", e => {
    account_section_toggle.classList.remove("show");
})
account_section_toggle.addEventListener("mouseenter", e => {
    account_section_toggle.classList.add("show");
})
account_section_toggle.addEventListener("mouseleave", e => {
    account_section_toggle.classList.remove("show");
})





// side toggle 

let side_nav_open = document.querySelector(".side-nav-open");
let side_nav = document.querySelector(".side-nav");
let close = document.querySelector(".close");
let container = document.querySelector(".container");
side_nav_open.addEventListener("click", e => {
    side_nav.classList.add("aa");
    container.classList.add("bb");
});
close.addEventListener("click", e => {
    side_nav.classList.remove("aa");
    container.classList.remove("bb");

});







//slider 
