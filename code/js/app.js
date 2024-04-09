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

const headerScrollLink = $.querySelector(".header__scroll-link")

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        headerScrollLink.style.opacity = 1
    } else if (window.scrollY < 800) {
        headerScrollLink.style.opacity = 0
    }
})