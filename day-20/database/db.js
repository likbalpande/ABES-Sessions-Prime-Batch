const { ulid } = require("ulid");
const fsPromises = require("fs/promises");

const saveProductsArray = (arr) => {
    fsPromises.writeFile("./data.json", arr);
};

const getProductsArray = async () => {
    const str = await fsPromises.readFile("./data.json");
    const arr = JSON.parse(str);
    return arr;
};

const saveProductInDB = async (obj) => {
    obj.id = ulid();
    const oldArray = await getProductsArray();
    oldArray.push(obj);
    saveProductsArray(oldArray);
};

module.exports = {
    saveProductInDB,
};
