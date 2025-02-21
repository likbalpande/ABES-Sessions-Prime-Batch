const data = [
    {
        email: "rakesh@gmail.com",
        name: "Rakesh",
        city: "Delhi",
    },
    {
        email: "mohan@gmail.com",
        name: "Mohan",
        city: "Noida",
    },
    {
        email: "rishabh@gmail.com",
        name: "Rishabh",
        city: "Mumbai",
    },
    {
        email: "ramesh@gmail.com",
        name: "Ramesh",
        city: "Delhi",
    },
];

const root = document.getElementById("root");
const selectElement = document.getElementsByTagName("select")[0];

const cities = data.map((elem) => elem.city);

const showOptions = () => {
    cities.forEach((city) => {
        const newOption = document.createElement("option");
        newOption.value = city;
        newOption.innerText = city;
        selectElement.appendChild(newOption);
    });
};

const showCards = (newData) => {
    root.innerHTML = "";
    newData.forEach((elem, idx) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h4>${elem.name}</h4>
            <p>${elem.city}</p>
            <button onClick="deleteCard(event, '${elem.email}')">Delete</button>
        `;
        root.appendChild(card);
    });
};

const deleteCard = (e, elemEmail) => {
    // console.log(e.target.parentElement);
    // e.target.remove();
    // -- one way to delete
    // e.target.parentElement.remove();
    // -- another way to delete
    // console.log(e, idx);
    // data.splice(idx, 1);
    // showCards(data);
    // -- correct way
    const index = data.findIndex((elem) => elem.email == elemEmail);
    data.splice(index, 1);
    showCards(data);
};

const handleSelect = (e) => {
    const selectedCity = e.target.value;
    const newData = data.filter((elem) => {
        if (elem.city === selectedCity) return true;
        return false;
    });
    showCards(newData);
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target.email.value);
    // console.log(e.target[0].value);
    // console.log(e.target.fullName.value);
    // console.log(e.target[1].value);
    // console.log(e.target.city.value);
    // console.log(e.target[2].value);

    // add the data

    const isEmailExists = data.some((elem) => {
        return elem.email === e.target.email.value;
    });

    if (isEmailExists) {
        alert("Email already exists");

        return;
    }

    const newElem = {
        name: e.target.fullName.value,
        email: e.target.email.value,
        city: e.target.city.value,
    };

    data.push(newElem);
    showCards(data);
};

showCards(data);
