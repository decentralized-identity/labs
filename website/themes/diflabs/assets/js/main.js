
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});

