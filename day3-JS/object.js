// const obj = {
//     name: "Likhilesh",
//     city: "Delhi",
// };

// console.log(obj);

// -----------------------------------
// # repeated key will override the old value
// const obj = {
//     name: "Likhilesh",
//     name: "Raj",
//     city: "Delhi",
// };

// console.log(obj);
// -----------------------------------
// # How to access a value :: R
const obj = {
    name: "Likhilesh",
    name: "Raj",
    city: "Delhi",
};

const username = obj.name;

console.log(username);

// -----------------------------------
// # How to add a key value pair :: C
obj.country = "India";

console.log(obj);

// -----------------------------------
// # If you try to access a key which is not present --> undefined
console.log(obj.address);

// ----------------------------------
// # access a value dynamically :: R
// const key = prompt("Please enter a key");

// console.log(obj[key]);

// -----------------------------------
// # Update a value :: U
obj.city = "Mumbai"; // static

const key = "name";
obj[key] = "Anurag"; // dynamically

console.log(obj);

obj.city = "Chennai";

// -------------------------------------
// # Delete a key value pair

delete obj.city;

console.log(obj);
