"use client"

import { useEffect, useState } from "react";
import { produse } from "@/products";

export default function Page() {
    const [countedItems, setCountedItems] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        const itemsString = localStorage.getItem("cart") || "[]";
        const itemsFromStorage = JSON.parse(itemsString);

        // Set count of items
        const localCountedItems: { [key: number]: number } = {};
        for (const itemId of itemsFromStorage) {
            if (localCountedItems[itemId]) {
                localCountedItems[itemId]++;
            } else {
                localCountedItems[itemId] = 1;
            }
        }

        setCountedItems(localCountedItems);
    }, []);


    return (
        <div>
            <h1>Cart</h1>

            {Object.keys(countedItems).map((itemId, index) => {

                const thisProduct = produse.find(product => product.id === Number(itemId));
                if (!thisProduct) {
                    return <div key={index}>Product not found</div>
                }


                return (
                    <div key={index}>
                        {thisProduct.name} {thisProduct.price} ROBUX , buc.:{countedItems[Number(itemId)]}
                    </div>
                )
            })
            }


        </div>
    );
}
