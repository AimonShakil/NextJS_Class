import React from 'react'


export default async function page({params}:{params:{id:string}}) { // params itself is an object which has property of Id and value is 1 which is self given, this is id we had written in squre brackets in dynamic folder name
 
    const response =  await fetch(`https://dummyjson.com/products/${params.id}`) //here used $ sign to convert that params.id whcih in string form to number for Comparisons
    const product = await response.json()
    console.log(product)
  
    return (
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.discountPercentage}</p>
        <p>{product.rating}</p>
        <p>{product.stock}</p>
        <p>{product.brand}</p>
        <p>{product.category}</p>
        <p>{product.images}</p>
        
      </div>
    )
  }


