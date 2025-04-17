// npm init
// npm i express
// npm i -g nodemon
// npx nodemon app.js
const PORT = 2100;
const express = require("express");
const { requestLog } = require("./utils/logger");

const app = express();

app.get("/", (req, res) => {
    requestLog(req);

    res.json({
        status: "success",
        message: `Server is running on port ${PORT}`,
    });
});

app.post("/products", (req, res) => {
    requestLog(req);

    res.json({
        status: "fail",
        message: "work in progress!",
    });
});

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});
