// let count = 0;
console.log("Team B loading...");

const sum = (...arr) => {
    // count++;
    // console.log(count);

    const ans = arr.reduce((acc, elem) => {
        return acc + elem;
    }, 0);

    return ans;
};

module.exports = sum;

console.log("Team B done ✅");
