import React from 'react'
import Main from '../Wrap/Main'

const ProductsPage = async () => {

    const res = await fetch("https://dummyjson.com/products#products-all")
    const { products } = await res.json()

  return (
    <div>
        <Main>
            <h1>Products</h1>
            {products.map((product) =>(<p>{product.title}</p>))}
        </Main>
    </div>
  )
}

export default ProductsPage;