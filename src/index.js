import "./styles.css"
import { createMenu } from "./menu"
import { createHome } from "./home"
import { createAbout } from "./about";

const content = document.querySelector("#content");

const homeButton = document.querySelectorAll("button")[0];
const menuButton = document.querySelectorAll("button")[1];
const aboutButton = document.querySelectorAll("button")[2];

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    createHome();
})

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    createMenu();
})

aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    createAbout();
})


// createHome();
