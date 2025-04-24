const { ProductModel } = require("../../../../models/product-schema");

const getProductsController = async (req, res) => {
    const productsList = await ProductModel.find();
    res.send({
        status: "success",
        data: {
            products: productsList,
        },
    });
};

module.exports = {
    getProductsController,
};
