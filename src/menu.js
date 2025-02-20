import tonkatsu from "./images/spicy_tonkatsu.jpg"
import miso from "./images/miso.jpg"
import seafood from "./images/seafood.jpg"

function createMenuSkeleton() {
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.setAttribute("class", "menu");

    content.appendChild(menu);

    const menuHeading = document.createElement("div");
    menuHeading.setAttribute("class", "menu-heading");

    const headingH1 = document.createElement("h1");
    const headingH3 = document.createElement("h3");

    headingH1.textContent = "Love, in a bowl";
    headingH3.textContent = "a delicious assortment of flavors";

    menuHeading.appendChild(headingH1);
    menuHeading.appendChild(headingH3);

    menu.appendChild(menuHeading);

    const entryContainer = document.createElement("div");
    entryContainer.setAttribute("class", "entry-container");

    menu.appendChild(entryContainer);

    const entryOriginal = document.createElement("div");
    entryOriginal.setAttribute("class", "menu-entry");

    for (let i=0; i<3; i++) {
        const entry = entryOriginal.cloneNode(true);
        entryContainer.appendChild(entry);
    }

}

// Spicy Tonkatsu

function createTonkatsu() {
    const menuPicture = document.createElement("div");
    menuPicture.setAttribute("class", "menu-picture");

    const img = document.createElement("img");
    img.src = tonkatsu;

    menuPicture.appendChild(img);

    const menuText = document.createElement("div");
    menuText.setAttribute("class", "menu-text");

    const ramenName = document.createElement("h2");
    ramenName.textContent = "Spicy Tonkatsu Ramen"
    const ramenPrice = document.createElement("h3");
    ramenPrice.textContent = "16.99"
    const ramenDesc = document.createElement("p");
    ramenDesc.textContent = "Warm up your taste buds with this firery twist on a traditional Tonkatsu ramen. Contains your choice of proteins alongside two hard boiled, slightly undercooked, eggs.";

    const proteinContainer = document.createElement("div");
    proteinContainer.setAttribute("class", "protein-container");
    const choiceOfProt = document.createElement("em");
    choiceOfProt.textContent = "Choice of Protein:";
    const choiceOfProtPara = document.createElement("p");
    choiceOfProtPara.appendChild(choiceOfProt);

    const protList = document.createElement("ul");
    const proteinChicken = document.createElement("li");
    proteinChicken.textContent = "Grilled Chicken"
    const proteinPork = document.createElement("li");
    proteinPork.textContent = "Pork Chachu";
    const proteinTofu = document.createElement("li");
    proteinTofu.textContent = "Tofu"

    protList.appendChild(proteinChicken);
    protList.appendChild(proteinPork);
    protList.appendChild(proteinTofu);

    proteinContainer.appendChild(choiceOfProtPara);
    proteinContainer.appendChild(protList);

    // Add name, price, description, and proteins to first menu item
    menuText.appendChild(ramenName);
    menuText.appendChild(ramenPrice);
    menuText.appendChild(ramenDesc);
    menuText.appendChild(proteinContainer);

    const entryList = document.querySelectorAll(".menu-entry");

    entryList[0].appendChild(menuPicture);
    entryList[0].appendChild(menuText);
}

// Miso

function createMiso() {
    const menuPicture = document.createElement("div");
    menuPicture.setAttribute("class", "menu-picture");

    const img = document.createElement("img");
    img.src = miso;

    menuPicture.appendChild(img);

    const menuText = document.createElement("div");
    menuText.setAttribute("class", "menu-text-right");

    const ramenName = document.createElement("h2");
    ramenName.textContent = "Miso Ramen"
    const ramenPrice = document.createElement("h3");
    ramenPrice.textContent = "14.99"
    const ramenDesc = document.createElement("p");
    ramenDesc.textContent = "A fan favorite! A hearty bowl of all your favorite toppings within a savory miso broth. Contains tofu, cabbage, your choice of protein, and topped with onions and freshly picked basil.";

    const proteinContainer = document.createElement("div");
    proteinContainer.setAttribute("class", "protein-container");
    const choiceOfProt = document.createElement("em");
    choiceOfProt.textContent = "Choice of Protein:";
    const choiceOfProtPara = document.createElement("p");
    choiceOfProtPara.appendChild(choiceOfProt);

    const protList = document.createElement("ul");
    const proteinChicken = document.createElement("li");
    proteinChicken.textContent = "Grilled Chicken"
    const proteinPork = document.createElement("li");
    proteinPork.textContent = "Pork Chachu";
    const proteinTofu = document.createElement("li");
    proteinTofu.textContent = "Tofu"

    protList.appendChild(proteinChicken);
    protList.appendChild(proteinPork);
    protList.appendChild(proteinTofu);

    proteinContainer.appendChild(choiceOfProtPara);
    proteinContainer.appendChild(protList);

    // Add name, price, description, and proteins to first menu item
    menuText.appendChild(ramenName);
    menuText.appendChild(ramenPrice);
    menuText.appendChild(ramenDesc);
    menuText.appendChild(proteinContainer);

    const entryList = document.querySelectorAll(".menu-entry");

    entryList[1].appendChild(menuText);
    entryList[1].appendChild(menuPicture);
}

// Seafood

function createSeafood() {
    const menuPicture = document.createElement("div");
    menuPicture.setAttribute("class", "menu-picture");

    const img = document.createElement("img");
    img.src = seafood;

    menuPicture.appendChild(img);

    const menuText = document.createElement("div");
    menuText.setAttribute("class", "menu-text");

    const ramenName = document.createElement("h2");
    ramenName.textContent = "Seafood Ramen"
    const ramenPrice = document.createElement("h3");
    ramenPrice.textContent = "17.99"
    const ramenDesc = document.createElement("p");
    ramenDesc.textContent = "Fresh from the sea! Enjoy a delicious bowl topped with all the harbor's finest flavors. Contains a creamy seafood broth topped with snowpeas, shrimp, a hard boiled, slightly undercooked, egg, and sesame seeds.";


    // Add name, price, description, and proteins to first menu item
    menuText.appendChild(ramenName);
    menuText.appendChild(ramenPrice);
    menuText.appendChild(ramenDesc);

    const entryList = document.querySelectorAll(".menu-entry");

    entryList[2].appendChild(menuPicture);
    entryList[2].appendChild(menuText);
}

function addDisclaimer() {
    const disclaimer = document.createElement("div");
    disclaimer.setAttribute("class", "disclaimer");
    const disclaimerText = document.createElement("p");
    disclaimerText.textContent = "CONSUMING RAW OR UNDERCOOKED MEATS, POULTRY, SEAFOOD, SHELLFISH, OR EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS, ESPECIALLY IF YOU HAVE CERTAIN MEDICAL CONDITIONS."
    disclaimer.appendChild(disclaimerText);

    const entryContainer = document.querySelector(".entry-container");
    entryContainer.appendChild(disclaimer);
}


function createMenu() {
    createMenuSkeleton();

    createTonkatsu();
    createMiso();
    createSeafood();


    addDisclaimer();
}

export {createMenu};