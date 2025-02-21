const data = [
    {
        id: "abcd1",
        name: "Rakesh",
        city: "Delhi",
    },
    {
        id: "a1",
        name: "Mohan",
        city: "Noida",
    },
    {
        id: "b2",
        name: "Rishabh",
        city: "Mumbai",
    },
    {
        id: "abcd3",
        name: "Ramesh",
        city: "Delhi",
    },
];

const root = document.getElementById("root");

const showCards = (newData) => {
    root.innerHTML = "";
    newData.forEach((elem, idx) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h4>${elem.name}</h4>
            <p>${elem.city}</p>
            <button onClick="deleteCard(event, '${elem.id}')">Delete</button>
        `;
        root.appendChild(card);
    });
};

const deleteCard = (e, elemId) => {
    // console.log(e.target.parentElement);
    // e.target.remove();
    // -- one way to delete
    // e.target.parentElement.remove();
    // -- another way to delete
    // console.log(e, idx);
    // data.splice(idx, 1);
    // showCards(data);
    // -- correct way
    const index = data.findIndex((elem) => elem.id == elemId);
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

showCards(data);
