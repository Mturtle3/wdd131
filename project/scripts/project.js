const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

if (localStorage.getItem("menuOpen") === "true") {
    nav.classList.add("open");
}

menuButton.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        localStorage.setItem("menuOpen", "false");
    } else {
        nav.classList.add("open");
        localStorage.setItem("menuOpen", "true");
    }
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `${currentYear}`;
document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;

const links = Array.from(document.querySelectorAll("li a"));

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        localStorage.setItem("menuOpen", "false");
    });
});