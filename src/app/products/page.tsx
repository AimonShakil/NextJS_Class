import React from 'react'
import Link from "next/link";



export default async function products() {
    const response = await fetch('https://dummyjson.com/products?limit=10')
    const {products} = await response.json()
     console.log({products})
   
  
    return (
      <div className=' px-4'>
        {
          products.map((product:any) => (
              <Link key={product.id} href={`/products/${product.id}`} ><h2 >{product.title}</h2></Link>
          )
        )}
      </div>
    );
  }


  
  