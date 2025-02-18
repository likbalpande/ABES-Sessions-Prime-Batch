// ---------------- 1. FUNCTION DECLARATION

// print("Mohan");

// function print(a) {
//     console.log("Hello", a);
// }

// function print(a) {
//     console.log("Hi", a);
// }

// print("Rakesh");
// CONS
// 1. can be defined several times with same name
// 2. We can call it before declaration

// ---------------- 2. FUNCTION Assignment

// const view = function printText(a) {
//     console.log("Hi", a);
// };

// view("Rakesh");
// printText("Rakesh");

// ---------------- 3. (anonymous) FUNCTION Assignment

// const view = function (a) {
//     console.log("Hi", a);
// };

// view("Rakesh");
// printText("Rakesh");

// ---------------- 4. (arrow) FUNCTION Assignment
// ES6+ syntax

// const view = (a) => {
//     console.log("Hi", a);
// };

// view("Rakesh");
// printText("Rakesh");

// --------------------------------------------------------
// SOME Examples
// --------------------------------------------------------

// function to calculate sum and return its mod 10 value using type 1,2,3,4

// type 1
// function sumMod10(a, b) {
//     return (a + b) % 10;
// }

// type 2
// const sumMod10 = function sumMod10(a, b) {
//     return (a + b) % 10;
// };

// type 3
// const sumMod10 = function (a, b) {
//     return (a + b) % 10;
// };

// type 4
// const sumMod10 = (a, b) => {
//     return (a + b) % 10;
// };

// type 4 : short syntax
// remove curly brackets and also remove the return keyword
const sumMod10 = (a, b) => (a + b) % 10;

const ans = sumMod10(20, 32);
console.log(ans);
