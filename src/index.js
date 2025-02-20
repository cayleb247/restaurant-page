import "./styles.css"
import { createMenu } from "./menu"
import { createHome } from "./home"

const content = document.querySelector("#content");

const homeButton = document.querySelectorAll("button")[0];
const menuButton = document.querySelectorAll("button")[1];

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    createHome();
})

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    createMenu();
})

createHome();
