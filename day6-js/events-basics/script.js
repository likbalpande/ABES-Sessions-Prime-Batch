const data = [
    { name: "Anuj", city: "Delhi", email: "anuj@abes.edu.in" },
    { name: "Rakesh", city: "Mumbai", email: "rakesh@abes.edu.in" },
    { name: "Mohan", city: "Hyderabad", email: "mohan@abes.edu.in" },
    { name: "Ajay", city: "Noida", email: "ajay@abes.edu.in" },
];

const root = document.getElementById("parent");

data.forEach((elem) => {
    const newCard = document.createElement("div");
    newCard.addEventListener(
        "click",
        () => {
            console.log("div clicked");
            newCard.style.backgroundColor = getRandomColor();
        },
        false
    );
    // setAttribute
    // classList.add
    newCard.className = "card";
    newCard.innerHTML = `
        <h4>${elem.name}</h4>
        <h6>${elem.email}</h6>
        <p class='text'>${elem.city}</p>
    `;
    root.appendChild(newCard);
});

const handleBgChange = () => {
    console.log("btn clicked!");
    // logic to change background color
    const bodyElem = document.querySelector("body");
    bodyElem.style.backgroundColor = getRandomColor();
};

// handleBgChange();

const getRandomColor = () => {
    const randomRed = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
};

const textElement = document.querySelector(".text");
textElement.addEventListener("click", (event) => {
    console.log("para clicked", event);
    event.stopPropagation();
    textElement.style.backgroundColor = getRandomColor();
});
