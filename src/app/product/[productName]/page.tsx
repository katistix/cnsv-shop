


function Page(props: any) {
    return (
        <div>
            <h1 className="text-3xl"> Pagina produs</h1>
            {props.params.productName}
        </div>
    )



}


export default Page;