let $ = document
const navBtn = $.querySelector(".nav-btn")
const navMenu = $.querySelector(".nav-menu")
const overlay = $.querySelector(".overlay")
navBtn.addEventListener("click", () => {
    if (navBtn.classList.contains("nav-btn--open")) {
        navBtn.classList.remove("nav-btn--open")
        navMenu.classList.remove("nav-menu--open")
        overlay.style.opacity = 0
    } else {
        navBtn.classList.add("nav-btn--open")
        navMenu.classList.add("nav-menu--open")
        overlay.style.opacity = 1
    }
})