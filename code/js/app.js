let $ = document
const navBtn = $.querySelector(".nav-btn")
const navMenu = $.querySelector(".nav-menu")
const overlay = $.querySelector(".overlay")
navBtn.addEventListener("click", () => {
    if (navBtn.classList.contains("nav-btn--open")) {
        navBtn.classList.remove("nav-btn--open")
        navMenu.classList.remove("nav-menu--open")
        overlay.classList.remove("show")
    } else {
        navBtn.classList.add("nav-btn--open")
        navMenu.classList.add("nav-menu--open")
        overlay.classList.add("show")
    }
})