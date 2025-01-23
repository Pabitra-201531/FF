// Animation for header links on hover
document.querySelectorAll("header ul li a").forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#ffffff";
        link.style.textShadow = "0px 2px 5px rgba(255, 255, 255, 0.5)";
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "white";
        link.style.textShadow = "none";
    });
});

// Input placeholder animation on focus
const searchInput = document.querySelector("main input");
searchInput.addEventListener("focus", () => {
    searchInput.placeholder = "Type here...";
});

searchInput.addEventListener("blur", () => {
    searchInput.placeholder = "Search for restaurant, cuisine or a dish";
});

// Fade-in effect for the main section
window.addEventListener("load", () => {
    const main = document.querySelector("main");
    main.style.opacity = "0";
    main.style.transition = "opacity 2s ease-in-out";
    setTimeout(() => {
        main.style.opacity = "1";
    }, 500);
});
