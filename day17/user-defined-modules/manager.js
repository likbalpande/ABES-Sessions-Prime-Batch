console.log("manager loading...");
const obj = require("./team_a.js");
const sum = require("./team_b.js");

console.log(`
    Our current 
        Revenue is ${obj.REVENUE}$
        with ${obj.PROFIT}$ profit;    
`);

const REVENUE = sum(100, 100);

console.log(REVENUE);

console.log("manager done ✅");

// ********** team_a.js *********
((module, exports, __dirname) => {
    console.log("Team A loading...");
    const REVENUE = 100;
    console.log(REVENUE);
    // module.exports = { REVENUE };
})();

// ********** team_c.js *********

(() => {
    // const obj = require('./team_a.js');
    console.log("Team C loading...");
    const REVENUE = 200;
    console.log(REVENUE);
})();
