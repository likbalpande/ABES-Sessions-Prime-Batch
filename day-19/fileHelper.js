const fsPromises = require("fs/promises");
const { ulid } = require("ulid");

const saveObjInFile = async (obj) => {
    try {
        const oldData = await fsPromises.readFile("./data.json", "utf-8");
        // datatype of oldData is string
        const oldDataArr = JSON.parse(oldData || "[]");
        // datatype of oldDataArr is string
        const idx = oldDataArr.findIndex(({ name, price }) => {
            if (name === obj.name && price === obj.price) return true;
        });
        if (idx == -1) {
            obj.id = ulid();
            oldDataArr.push(obj);
            // oldDataArr.push({...obj, id:ulid()});
        } else {
            oldDataArr[idx].stock = Number(oldDataArr[idx].stock) + Number(obj.stock);
        }

        await fsPromises.writeFile("./data.json", JSON.stringify(oldDataArr, 2));
    } catch (err) {
        console.log("File handling error:", err.message);
    }
};

module.exports = {
    saveObjInFile,
};
