"use client"


import { Button } from "./ui/button"


type Props = {
    itemId: number
}


export const AddToCartBtn = (props: Props) => {




    function handleClick() {
        const produseCurenteString = localStorage.getItem("cart") || "[]";
        const produseCurente: number[] = JSON.parse(produseCurenteString);

        const newList = [...produseCurente, props.itemId];
        const newListString = JSON.stringify(newList);


        localStorage.setItem("cart", newListString);

        alert("adaugat " + props.itemId)
    }

    return (
        <Button
            onClick={handleClick}
        >
            Add to cart
        </Button>
    )
}