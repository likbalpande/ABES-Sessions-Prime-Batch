const http = require("http");
const { saveObjInFile } = require("./fileHelper.js");

const server = http.createServer((req, res) => {
    const { url, method } = req;
    const [path, queryStr] = url.split("?");
    if (path === "/products" && method === "POST") {
        const queryItems = queryStr.split("&");
        const queryKeyVals = queryItems.map((str) => str.split("="));
        const obj = Object.fromEntries(queryKeyVals);

        saveObjInFile(obj);

        res.end(
            JSON.stringify({
                status: "success",
                message: "Product added",
            })
        );
    }
});

server.listen(2100, () => {
    console.log("server is running on port 2100");
});
