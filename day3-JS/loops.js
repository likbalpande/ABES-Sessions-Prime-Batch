const arr = ["Delhi", "Fruits", 99];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i in arr) {
    // keys
    console.log("in::", i);
}

for (let i of arr) {
    // values :: only works iterables
    console.log("of::", i);
}

// while(){}
// do{} while()
