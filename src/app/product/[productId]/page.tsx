
import { AddToCartBtn } from "@/components/AddToCartBtn";
import { Button } from "@/components/ui/button";
import { produse } from "@/products";


type Props = {
    params: {
        productId: string
    }
}


function Page(props: Props) {

    const productId = props.params.productId;

    const product = produse.find(product => product.id === parseInt(productId));


    if (!product) {
        return <div>404 - not found</div>
    }

    return (
        <div>
            <h1 className="text-3xl"> Pagina produs</h1>
            {product.name} {product.price}
            <AddToCartBtn itemId={product.id} />
        </div>
    )



}


export default Page;