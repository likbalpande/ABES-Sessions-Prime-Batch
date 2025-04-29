const { ProductModel } = require("../../../../models/product-schema");

const createProductController = async (req, res) => {
    try {
        console.log("Processing create product request!");
        const obj = req.body;
        const newProduct = await ProductModel.create(obj);

        res.status(201);
        res.json({
            status: "success",
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        console.log(err.name);
        console.log(err.code);
        if (err.name === "MongoServerError" && err.code === 11000) {
            res.status(400);
            res.json({
                status: "fail",
                err: err.message,
            });
        } else {
            res.status(500);
            res.json({
                status: "fail",
                err: "Internal Server Error",
            });
        }
    }
};

module.exports = {
    createProductController,
};
