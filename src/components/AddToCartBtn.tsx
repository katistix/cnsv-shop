"use client"


import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"


type Props = {
    itemId: number
}


export const AddToCartBtn = (props: Props) => {

    const [count, setCount] = useState(0);


    function handleClick() {
        if (count <= 0) {
            alert("Ce facem aicia fratele meleu ca nu e bine!");
            return;
        }


        const produseCurenteString = localStorage.getItem("cart") || "[]";
        const produseCurente: number[] = JSON.parse(produseCurenteString);

        let itemsToAdd = [];
        for (let i = 0; i < count; i++) {
            itemsToAdd.push(props.itemId);
        }

        const newList = [...produseCurente, ...itemsToAdd];
        const newListString = JSON.stringify(newList);


        localStorage.setItem("cart", newListString);
        alert("Produsul a fost adaugat in cos");

        window.location.reload();
    }

    return (
        <div className="flex flex-row gap-3">
            <Button
                onClick={handleClick}
            >
                Add to cart
            </Button>
            <Input
                value={count}
                onChange={(e: any) => {
                    setCount(e.target.value)
                }}
                className="w-36"
                type="number"
                placeholder="count"
            />
        </div>
    )
}