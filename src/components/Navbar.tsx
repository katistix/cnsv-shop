"use client";

import { useEffect, useState } from "react";
import { LinkMeniu } from "./LinkMeniu";
import { produse } from "@/products";

const test = "h-36";

export function Navbar() {
    const [isCartShown, setIsCartShown] = useState(false);

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
        <div className=" bg-slate-800 flex justify-between p-3">
            <a href="/">
                <h1 className=" hover:text-red-500 font-bold text-slate-50">
                    SITE CNSV
                </h1>
            </a>

            {/* right */}
            <div className=" flex gap-4">
                <LinkMeniu link="/" text="Home" />
                <LinkMeniu link="/about" text="About" />
                {/* Cart link */}
                <div
                    onMouseEnter={(e) => {
                        setIsCartShown(true);
                    }}
                    onMouseLeave={(e) => {
                        setIsCartShown(false);
                    }}
                    className="ml-4 cursor-pointer">
                    <a href="/cart">
                        <div className="hover:-rotate-180 duration-500">🛒</div>
                    </a>
                    {/* cart drop menu */}

                    <div
                        className={`bg-red-400 z-[-10] duration-500 py-4 absolute right-0 top-12 w-36 max-h-[50vh] ${isCartShown
                            ? "translate-y-0"
                            : " translate-y-[-50vh] delay-500"
                            }`}>
                        cart:

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
                </div>
            </div>
        </div>
    );
}
