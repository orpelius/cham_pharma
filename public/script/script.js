
window.addEventListener("scroll", function() {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 100) {
        navbar.classList.add("fixed", "bg-blue-900/90", "shadow-md");
        navbar.classList.remove("absolute", "bg-black/30");
    } else {
        navbar.classList.add("absolute", "bg-black/30");
        navbar.classList.remove("fixed", "bg-blue-900/90", "shadow-md");
    }
});
