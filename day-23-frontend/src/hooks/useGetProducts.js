import { useEffect, useState } from "react";

const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const resp = await fetch("http://localhost:2200/api/v1/products", {
                method: "GET",
            });
            const result = await resp.json();
            setProducts(result.data.products);
        } catch (err) {
            console.log("getData-->", err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { products, loading };
};

export { useGetProducts };
