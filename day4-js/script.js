// -----------------------------
// two separate functions

// const sum = (a, b) => {
//     const ans = a + b;
//     return ans;
// };

// const printPretty = (txt) => {
//     console.log("-----------");
//     console.log(txt);
//     console.log("-----------");
// };

// const res = sum(20, 30);
// printPretty(res);

// -----------------------------

// eliminated extra variable

// const sum = (a, b) => {
//     const ans = a + b;
//     return ans;
// };

// const printPretty = (txt) => {
//     console.log("-----------");
//     console.log(txt);
//     console.log("-----------");
// };

// printPretty(sum(20, 30));

// -----------------------------
// # Callbacks and H.O.F.

// const sum = (a, b, c) => {
//     // Higher Order Function
//     const ans = a + b;
//     // return ans;
//     c(ans);
// };

// const printPretty = (txt) => {
//     console.log("-----------");
//     console.log(txt);
//     console.log("-----------");
// };

// // printPretty(sum(20, 30));
// sum(20, 30, printPretty);
// // printPretty callback function
// -----------------------------
// # TEMPLATE LITERALS
// const str1 = "Hello";
// const str2 = "Likhilesh";

// // const ans = str1+' '+str2+'!';
// const ans = `${str1} ${str2}!`; //ES6+

// console.log(ans);

// ----------------------------

// # FOREACH

// const arr = [10, 20, 30];

// const printPretty = (elem, idx, c, d, e) => {
//     console.log("*",elem, idx, c, d, e);
// }

// arr.forEach(printPretty);

// ----------------------------

// # 3 IMP Object methods
// const obj = {
//     maths: 30,
//     english: 10,
//     hindi: 20,
// }

// const marks = Object.values(obj);
// const subjects = Object.keys(obj);
// const pairs = Object.entries(obj);

// console.log(marks);
// console.log(subjects);
// console.log(pairs);

// ----------------------------
// // # forEach vs map
// const arr = [10, 20, 30];

// // # using forEach
// const newArray = [];

// arr.forEach((a)=>{
//     newArray.push(a*2);
// });

// console.log(newArray);

// ----------------------------

// # REDUCE IN JS : https://docs.google.com/spreadsheets/d/1UMcxGl4NLcxAL8QvTKqDPLdD_I2zOK9OCMVO3Sk1GjU/edit?usp=sharing
// const arr = [10, 20, 30];

// # with default value
// arr.reduce((acc, elem, idx, c)=>{
//     console.log(acc, elem, idx, c);
//     return acc;
// }, 0);

// # without default value
// arr.reduce((acc, elem, idx, c)=>{
//     console.log(acc, elem, idx, c);
//     return acc;
// });

// # use cases : 1 : sum;
// const ans = arr.reduce((acc, elem)=>{
//     return acc+elem;
// }, 0);
// console.log(ans);

// # use cases : 2 : mul;
// const ans = arr.reduce((acc, elem)=>{
//     return acc*elem;
// });
// console.log(ans);

const getMetaData = () => {
    const name = prompt("Please enter you name");
    console.log("Hello", name);
    const numOfSubText = prompt("Please enter the number of subjects");
    const numOfSub = parseInt(numOfSubText); // parseFloat(), Number()
    return numOfSub;
};

const getSubjects = (num) => {
    const record = {};
    for (let i = 0; i < num; i++) {
        const subName = prompt(`Please enter the name of subject ${i}`);
        const marks = Number(prompt(`Please enter the marks for ${subName}`));
        record[subName] = marks;
    }
    // record = { hello: "Likhilesh" }; :: ERROR
    return record;
};

const getPercentage = (obj) => {
    const marks = Object.values(obj);
    const totalMarks = 0;
    const totalSubjects = 0;

    marks.forEach((elem) => {
        totalMarks += elem;
        totalSubjects++;
    });

    const percentage = totalMarks / totalSubjects;

    return percentage;
};

const getHighestScoringSubject = (obj) => {
    let maxScore = 0;
    let maxScoreSubj = "";

    const marks = Object.entries(obj);

    marks.forEach((elem) => {
        const subjName = elem[0];
        const subjMarks = elem[1];

        if (subjMarks >= maxScore) {
            maxScoreSubj = subjName;
            maxScore = subjMarks;
        }
    });

    console.log(maxScoreSubj);
};

const getGrades = (percentage) => {
    const grades = [
        [60, "B"],
        [70, "B+"],
        [80, "A"],
        [90, "A+"],
    ];

    let grade = "F";

    grades.forEach((arr) => {
        if (arr[0] >= percentage) {
            grade = arr[1];
        }
    });

    console.log(grade);
};

const num = getMetaData();
const record = getSubjects(num);
getHighestScoringSubject(record);
const percentage = getPercentage(record);
console.log(percentage);
getGrades(percentage);
