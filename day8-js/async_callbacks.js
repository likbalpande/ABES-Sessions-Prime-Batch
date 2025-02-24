// console.log("start");

// const handleInnerCall = () => {
//     console.log("Step Y");
// };

// const handleCall = () => {
//     console.log("Step M");

//     handleInnerCall();

//     console.log("Step N");
// };

// handleCall();

// console.log("end");

// ------------------------------------------------------

// # Event Listeners

// console.log("start");

// const handleInnerCall = () => {
//     console.log("Step Y");
// };

// const handleCall = () => {
//     console.log("Step M");

//     handleInnerCall();

//     console.log("Step N");
// };

// document.querySelector("body").addEventListener("click", handleCall);

// console.log("end");

// // ------------------------------------------------------

// // # setTimeout

// console.log("start");

// const handleInnerCall = () => {
//     console.log("Step Y");
// };

// const handleCall = () => {
//     console.log("Step M");

//     handleInnerCall();

//     console.log("Step N");
// };

// setTimeout(handleCall, 10000); // time in milliseconds

// console.log("end");

// ------------------------------------------------------

// # setTimeout

// console.log("start");

// const handleInnerCall = () => {
//     console.log("Step Y");
// };

// function handleCall() {
//     console.log("Step M");

//     handleInnerCall();

//     console.log("Step N");
// }

// setTimeout(handleCall, 0); // time in milliseconds

// console.log("end");

// // ------------------------------------------------------

// // # setTimeout

// console.log("A");

// const handleCall = () => {
//     console.log("H");
// };

// setTimeout(() => {
//     console.log("N");

//     setTimeout(() => {
//         console.log("P");
//     }, 0);

//     handleCall();

//     console.log("B");
// }, 5000);

// console.log("C");

// ----------------------------------------------------------------

/*

    hyderabad: take user credentials and authenticate
    --> handleUser()

    noida: make the payment from the wallet by doing the required checks 
    --> handlePayment(id)

    bangalore: to handle these two teams and implement wallet functionality
    // CASE 1 (requirement)
    --> const userId = handleUser()
    --> if(userId){
    -->     const resp = handlePayment(userId)
    -->     console.log(resp);
    --> }
    --> else{
    -->     console.log("invalid details");
    --> }

    // using callbacks
    --> const resp = handleUser(handlePayment) 
                        // what if the team calls handlePayment 2 times? 
                        // or even with wrong credentials? 
                        // or never calls it?
    --> console.log(resp);

    // using promises
    --> const resp = handleUser() --> returns a promise
    --> THEN {
    -->     const resp = handlePayment(userId)
    -->     console.log(resp);
    --> }
    --> CATCH{
    -->     console.log("invalid details");
    --> }
*/

/*

---------------------------------------------
// DESTRUCTURING of object

const obj = {
    name: 'likhilesh',
    city: 'Delhi',
    // country: null,
    // country: undefined,
    country: "IN",
}

// console.log(obj.city)
const {city, country = 'India'} = obj;

console.log(city, country)

------------------------------------------------------

OBJECT DESTRUCTURING BY REFERENCE

const obj = {
    name: 'Likhilesh',
    city: 'Delhi',
    country: "IN",
    info: {
        college: 'ABES',
    }
}

let {name, info} = obj;

name = "Ajay";
// info.college = 'ABCD';
info = {college: 'ABCD'};

console.log(name, info.college);
console.log(obj);


------------------------------------------------
PROMISES: fetch()

*/

// const res = fetch("https://dummyjson.com/products");
// const pr = fetch("https://api.github.com/users/likbalpande");

// console.log(pr);

// pr.then((a) => {
//     const pr2 = a.json();

//     pr2.then((data) => {
//         // console.log("data", data);
//         showUI(data);
//     });
// }).catch((b) => {
//     console.log("b", b);
// });

// function showUI(data) {
//     // responsible for creating a visualization
//     console.log("data:", data);
//     const { avatar_url, login, html_url } = data;
//     const card = document.getElementById("card");
//     card.innerHTML = `
//         <h4>${login.toUpperCase()}</h4>
//         <img src='${avatar_url}' alt='avatar'>
//         <a href=${html_url}>View Profile</a>
//     `;
// }

// ----------------------------------------------------------------------\

const getData = (e) => {
    const profile = e.target.value;
    const pr = fetch(`https://api.github.com/users/${profile}`);
    console.log(pr);
    pr.then((a) => {
        const pr2 = a.json();
        pr2.then((data) => {
            // console.log("data", data);
            showUI(data);
        });
    }).catch((b) => {
        console.log("b", b);
    });
};

// getData();

function showUI(data) {
    // responsible for creating a visualization
    console.log("data:", data);
    const { avatar_url, login, html_url } = data;
    const root = document.getElementById("cards");
    const newCard = document.createElement("div");
    newCard.id = "card";
    newCard.innerHTML = `
        <h4>${login.toUpperCase()}</h4>
        <img src='${avatar_url}' alt='avatar'>
        <a href=${html_url}>View Profile</a>
    `;
    root.appendChild(newCard);

    storeData(data);
}

function storeData(data) {
    const oldData = localStorage.getItem("searches"); // returns a JSON string
    const arr = JSON.parse(oldData || "[]");
    arr.push(data);
    localStorage.setItem("searches", JSON.stringify(arr)); //key, value
}

function showHistory() {
    const oldData = localStorage.getItem("searches"); // returns a JSON string
    const arr = JSON.parse(oldData || "[]");
    // if(oldData === undefined) arr = JSON.stringify('[]');
    arr.forEach((data) => {
        showUI(data);
    });
}

showHistory();
