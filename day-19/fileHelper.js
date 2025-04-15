const fsPromises = require("fs/promises");

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
            oldDataArr.push(obj);
        } else {
            oldDataArr[idx].stock = Number(oldDataArr[idx].stock) + Number(obj.stock);
        }

        await fsPromises.writeFile("./data.json", JSON.stringify(oldDataArr));
    } catch (err) {
        console.log("File handling error:", err.message);
    }
};

module.exports = {
    saveObjInFile,
};
