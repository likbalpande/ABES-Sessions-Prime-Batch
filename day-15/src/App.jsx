import { useEffect, useState } from "react";
import Card from "./components/Card";

const AppPage = () => {
    // const getData = () => {
    //     const pr1 = fetch("https://dummyjson.com/products");
    //     pr1.then((res) => {
    //         console.log("Res:", res);

    //         const pr2 = res.json();

    //         pr2.then((data) => {
    //             console.log("Data:", data);
    //         });
    //     }).catch((err) => {
    //         console.log("Error occurred:", err);
    //     });
    // };

    // const getData = () => {
    //     const pr1 = fetch("https://dummyjson.com/products");
    //     pr1.then((res) => {
    //         const pr2 = res.json();
    //         return pr2;
    //     })
    //         .catch((err) => {
    //             console.log("Error occurred:", err);
    //         })
    //         .then((data) => {
    //             console.log("Data:", data);
    //         });
    // };

    // const getData = () => {
    //     const pr1 = fetch("https://dummyjson.com/products");
    //     pr1.then((res) => res.json())
    //         .catch((err) => {
    //             console.log("Error occurred:", err);
    //         })
    //         .then((data) => {
    //             console.log("Data:", data);
    //         });
    // };

    const [data, setData] = useState({});
    const [currPage, setCurrPage] = useState(0);

    console.log("-------- A", data);

    const getData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${currPage}`);
            const temp = await response.json();
            // setData(temp.products[0].title);
            setData(temp);
        } catch (err) {
            console.log("Error", err.message);
        } finally {
            console.log("-------------- done!");
        }
    };

    // getData();

    useEffect(() => {
        getData();
    }, [currPage]);

    console.log("-------- B", data);

    const totalPages = Math.ceil(data.total / data.limit);
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
        pages.push(i + 1);
    }

    return (
        <>
            <select
                onChange={(e) => {
                    setCurrPage(e.target.value);
                }}
            >
                {pages.map((pageNumber) => {
                    return <option>{pageNumber}</option>;
                })}
            </select>
            {data.products?.map((elem) => {
                return <Card title={elem.title} price={elem.price} thumbnail={elem.thumbnail} />;
            })}
        </>
    );
};

{
    /* <h1>Hello</h1>
            <p>Something....</p>
            <hr></hr> */
}
{
    /* <h4>{data.products?.[0].title}</h4> */
}
{
    /* optional chaining */
}
{
    /* conditional rendering */
}
{
    /* nullish coalescing */
}

export default AppPage;
