export default function Page({params} :{params: {consultancyid: string}}){
    console.log(params);
    const id=1
    const response = await fetch ('https://dummyjson.com/products?limit=10')
    const {products} = await response
    return(
        <>
        <div>
            Ecommerce
            <Link href = {`/consultancyid/${id}`}> go to the products</Link>

          products.map()product


        </div>
        </>
    )
} 