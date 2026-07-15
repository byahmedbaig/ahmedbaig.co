const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});
