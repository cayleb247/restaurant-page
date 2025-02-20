function createHome() {
    const content = document.querySelector("#content");

    const homeBackground = document.createElement("div");
    homeBackground.setAttribute("class", "background");

    content.appendChild(homeBackground);

    const homeHeadingH1 = document.createElement("h1");
    const homeHeadingH3 = document.createElement("h3");
    const homeDescriptionP = document.createElement("p");

    homeHeadingH1.textContent = "Welcome!";
    homeHeadingH3.textContent = "take a warm break from your travels"
    homeDescriptionP.textContent = "Here at D&C ramen, we hope to create a memorable experience for both you and your stomach. Inspired from traditional Japanese flavors, we instill century-old techniques of crafting ramen into one, authentic bowl. We are local owned and have multiple locations across town. If you found your experience here enjoyable, please consider referring us to a friend!"

    const hoursHeadingH1 = document.createElement("h2");
    hoursHeadingH1.textContent = "Hours";

    const sundayHours = document.createElement("p");
    const mondayHours = document.createElement("p");
    const tuesdayHours = document.createElement("p");
    const wednesdayHours = document.createElement("p");
    const thursdayHours = document.createElement("p");
    const fridayHours = document.createElement("p");
    const saturdayHours = document.createElement("p");

    sundayHours.textContent = "Sunday ....................................................................... CLOSED";
    mondayHours.textContent = "Monday ................................................................. 7AM - 9PM";
    tuesdayHours.textContent = "Tuesday ................................................................ 7AM - 9PM";
    wednesdayHours.textContent = "Wednesday .............................................................. 7AM - 9PM";
    thursdayHours.textContent = "Thursday ............................................................... 7AM - 9PM";
    fridayHours.textContent = "Friday ................................................................. 7AM - 9PM";
    saturdayHours.textContent = "Saturday ............................................................... 7AM - 6PM"

    const contactHeadingH1 = document.createElement("h2");
    contactHeadingH1.textContent = "Contact Us";

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "(123)-456-7890";
    const email = document.createElement("p");
    email.textContent = "thedcramen@gmail.com"

    homeBackground.appendChild(homeHeadingH1);
    homeBackground.appendChild(homeHeadingH3);
    homeBackground.appendChild(document.createElement("br"));
    homeBackground.appendChild(homeDescriptionP);
    homeBackground.appendChild(document.createElement("br"));
    homeBackground.appendChild(hoursHeadingH1);
    homeBackground.appendChild(document.createElement("br"));
    homeBackground.appendChild(sundayHours);
    homeBackground.appendChild(document.createElement("br"));
    homeBackground.appendChild(mondayHours);
    homeBackground.appendChild(document.createElement("br"));
    homeBackground.appendChild(tuesdayHours);
    homeBackground.appendChild(document.createElement("br"));
    homeBackground.appendChild(wednesdayHours);
    homeBackground.appendChild(document.createElement("br"));
    homeBackground.appendChild(thursdayHours);
    homeBackground.appendChild(document.createElement("br"));
    homeBackground.appendChild(fridayHours);
    homeBackground.appendChild(document.createElement("br"));
    homeBackground.appendChild(saturdayHours);
    homeBackground.appendChild(document.createElement("br"));
    homeBackground.appendChild(contactHeadingH1);
    homeBackground.appendChild(document.createElement("br"));
    homeBackground.appendChild(phoneNumber);
    homeBackground.appendChild(email);
}

export {createHome}