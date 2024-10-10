import React from 'react'

const ProductsPage = async () => {

    const res = await fetch("https://dummyjson.com/products#products-all")
    const { products } = await res.json()

  return (
    <div>
        <h1>Products</h1>
        {products.map((product) =>(<p>{product.title}</p>))}
    </div>
  )
}

export default ProductsPage;