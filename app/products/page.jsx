'use client'
import { useState } from "react";
import ProductCard from "./ProductList";
import useProducts from "./useProducts";

const ProductsPage = () => {
  const [sortValues, setSortValues] = useState({ sortBy: 'title', order: 'asc' });
  const { products } = useProducts(sortValues.sortBy, sortValues.order);

  const handleSelectedValues = (category) => {
    const [sortBy, order] = category.split('-')
    setSortValues({sortBy, order})
  }

  return (
    <div className="products-container">
      <div className="products-header">
        <h1 className="products-headertext">Products</h1>
      </div>
      <div className="products-sortcontainer">
        <ul>
          <li>
            Sort by:
            <select onChange={(event) => handleSelectedValues(event.target.value)}>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-asc">Rating: Low to High</option>
              <option value="rating-desc">Rating: High to Low</option>
            </select>
          </li>
          <li>
            Filter by:
            <select>
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home</option>
            </select>
          </li>
          <li>
            <input type="text" placeholder="Search products..." />
          </li>
        </ul>
      </div>
      <div className="products-divider"></div>
      {products.map((product) => (
        <ProductCard product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default ProductsPage;
