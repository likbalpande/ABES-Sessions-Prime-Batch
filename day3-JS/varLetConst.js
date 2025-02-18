// const temp = () => {
//     if (true) {
//         var username = "Raj";
//     }
//     console.log(username);
// };

// temp();
// console.log(username);

// ------------------ Function inside Function

const sumMod10 = (a, b) => {
    const ans = (a + b) % 10;

    const printPretty = (txt) => {
        console.log("----", txt, "-----");
    };

    printPretty(ans);
    console.log("sum done");
};

sumMod10(10, 34);

console.log("END");

// used SOURCES & Debugger
