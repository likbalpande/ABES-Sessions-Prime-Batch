const express = require("express");
const { getProductsController } = require("../controllers/getProductsController.js");
const { createProductController } = require("../controllers/postProductsController.js");
const { validateCreateProductDto } = require("../dto/validateCreateProductDto.js");

const productRouter = express.Router();

productRouter.get("/", getProductsController);
productRouter.post("/", validateCreateProductDto, createProductController);

module.exports = {
    productRouter,
};
