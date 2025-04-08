const http = require("http");
const fsPromises = require("fs/promises");
const PORT = 1200;

const getData = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();

    return data.products;
};

const getProductsHtmlCode = (products) => {
    let result = "";
    products.forEach(({ title, price }) => {
        result += `
            <div class='card'>
                <h4>${title}</h4>
                <p>${price}</p>
            </div>
        `;
    });
    return result;
};

const server = http.createServer(async (req, res) => {
    console.log("-------- request received ------");
    res.setHeader("content-type", "text/html");

    const page = await fsPromises.readFile("./pages/homePage.html", {
        encoding: "utf-8",
    });

    const products = await getData();
    const productsHTMLCode = getProductsHtmlCode(products);
    const newPage = page.replace("__PRODUCTS__", productsHTMLCode);
    res.end(newPage);
});

server.listen(PORT, () => {
    console.log(`-------- Server is Running on PORT ${PORT} ----------`);
    console.log(`------------- http://localhost:${PORT} --------------`);
});
