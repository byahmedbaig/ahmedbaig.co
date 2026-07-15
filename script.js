const button = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

button.addEventListener("click", () => {

    menu.classList.toggle("active");

    button.classList.toggle("active");

    button.setAttribute(
        "aria-expanded",
        button.classList.contains("active")
    );

});

document.addEventListener("click",(event)=>{

    if(
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ){

        menu.classList.remove("active");

        button.classList.remove("active");

        button.setAttribute("aria-expanded","false");

    }

});

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

        button.classList.remove("active");

        button.setAttribute("aria-expanded","false");

    });

});
