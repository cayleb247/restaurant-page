import chefs from "./images/chefs.jpg"

function createAbout() {
    const content = document.querySelector("#content");
    
    const background = document.createElement("div");
    background.setAttribute("class", "background");

    const headingH1 = document.createElement("h1");
    headingH1.textContent = "Who We Are";

    const headingH3 = document.createElement("h3");
    headingH3.textContent = "from our humble beginnings to where we are now";

    const description = document.createElement("p");
    description.textContent = "D&C Ramen started with nothing more than a hunger for something different. Growing up in southwest Virginia, Asian influence was few, and as ethnically Chinese, there simply was not enough places to fulfil our hunger for Asian cuisine. With the help of a few friends, D&C Ramen was able to grow in our town, now with hopes of expanding throughout Virginia. We are proud to have achieved our goal in brining authentic, fresh flavors to our local area."

    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "about-img");

    const img = document.createElement("img");
    img.src = chefs;

    imgContainer.appendChild(img);

    const captionItalics = document.createElement("em");
    const captionParagraph = document.createElement("p");

    captionParagraph.textContent = "Our chefs are hard at work to carefully craft delicious bowls of ramen right for when you need it most."
    captionItalics.appendChild(captionParagraph);

    const visitUs = document.createElement("p");
    const visitUsBold = document.createElement("strong");

    visitUsBold.textContent = "Come visit us today!";
    visitUs.appendChild(visitUsBold);

    const street = document.createElement("p");
    street.textContent = "3380 Slurp Ave";

    const city = document.createElement("p");
    city.textContent = "City, VA";

    // Append all elements to content
    content.appendChild(background);
    background.appendChild(headingH1);
    background.appendChild(headingH3);
    background.appendChild(document.createElement("br"));
    background.appendChild(description);
    background.appendChild(document.createElement("br"));
    background.appendChild(imgContainer);
    background.appendChild(document.createElement("br"));
    background.appendChild(captionItalics);
    background.appendChild(document.createElement("br"));
    background.appendChild(visitUs);
    background.appendChild(document.createElement("br"));
    background.appendChild(street);
    background.appendChild(city);
}

export {createAbout}

