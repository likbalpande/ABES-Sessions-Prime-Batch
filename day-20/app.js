// npm init
// npm i express
// npm i -g nodemon
// npx nodemon app.js
const PORT = 2100;
const express = require("express");
const { requestLog } = require("./utils/logger");
const { saveProductInDB } = require("./database/db");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(Object.keys(req));
    requestLog(req);
    next();
});

app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: `Server is running on port ${PORT}`,
    });
});

app.post("/products", async (req, res) => {
    try {
        const data = req.body;

        await saveProductInDB(data);

        res.json({
            status: "success",
            message: "Product stored!",
        });
    } catch (err) {
        console.log("/products", err.message);
        res.status(500);
        res.json({
            status: "fail",
            message: "Something went wrong...",
        });
    }
});

app.use((req, res, next) => {
    res.status(404);
    res.json({
        status: "fail",
        message: "You are trying to access a route which is not defined yet",
    });
});

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});
