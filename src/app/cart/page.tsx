"use client"

import { useEffect, useState } from "react";
import { produse } from "@/products";

export default function Page() {

    const [items, setItems] = useState<number[]>([]);

    useEffect(() => {
        const itemsString = localStorage.getItem("cart") || "[]";
        const itemsFromStorage = JSON.parse(itemsString);

        setItems(itemsFromStorage);
    }, []);


    return (
        <div>
            <h1>Cart</h1>
            {items.map((itemId, index) => {

                const thisProduct = produse.find(product => product.id === itemId);
                if (!thisProduct) {
                    return <div key={index}>Product not found</div>
                }


                return (
                    <div key={index}>
                        {thisProduct.name} {thisProduct.price}
                    </div>
                )
            })}
        </div>
    );
}
