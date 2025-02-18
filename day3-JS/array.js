// const arr = [];

const arr = ["fruits", "hello", 24];

console.log(arr);
console.log(arr.length);

// ----------------------
// #Similar to Object

// const obj = {
//     1: "fruits",
//     2: "hello",
//     3: 24,
//     length: 3,
// };

// console.log(obj);
// console.log(obj.length);

// ------------------------------
// # add in array : C

// correct way

arr.push("world");
console.log(arr);
console.log(arr.length);

// ------------------------------
// # how to access :: R

console.log(arr[2]);

// ------------------------------
// # how to update :: U

arr[3] = "Amazon";
console.log(arr);

// -----------------------
// incorrect syntax :: U / C
// adding an element at index > length creates holes in the array
arr[7] = "Hi";
console.log(arr);

// ----------------------------
// incorrect syntax :: D
delete arr[1];
console.log(arr);
