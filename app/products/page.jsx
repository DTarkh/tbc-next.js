import React from "react";
import ProductCard from "./ProductList";

const ProductsPage = async () => {
  const res = await fetch("https://dummyjson.com/products#products-all");
  const { products } = await res.json();

  return (
    <div className="products-container">
    
      {products.map((product) => (
        <ProductCard  product={product} />
      ))}
      
    
    </div>
  );
};

export default ProductsPage;
