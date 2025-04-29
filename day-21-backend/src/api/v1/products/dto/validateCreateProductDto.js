const validateCreateProductDto = (req, res, next) => {
    try {
        console.log("Validating create product request!");
        const { title, price, stock } = req.body;

        if (title === undefined || title === null || typeof title !== "string" || title.length < 2) {
            throw new Error("Invalid Title");
        }

        if (price === undefined || price === null || Number(price) === NaN || Number(price) <= 0) {
            throw new Error("Invalid Price");
        }

        if (stock !== undefined && price !== null) {
            if (Number(stock) === NaN || Number(stock) <= 0) {
                throw new Error("Invalid Stock");
            }
        }

        next();
    } catch (err) {
        res.status(400);
        res.json({
            status: "fail",
            message: err.message,
        });
    }
};

module.exports = {
    validateCreateProductDto,
};
