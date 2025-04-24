const express = require("express");
const { getProductsController } = require("../controllers/getProductsController.js");
const { createProductController } = require("../controllers/postProductsController.js");

const productRouter = express.Router();

productRouter.get("/", getProductsController);
productRouter.post("/", createProductController);

module.exports = {
    productRouter,
};
