'use client'
import { useState } from "react";
import ProductCard from "./ProductList";



const ProductsPage = () => {
  // const [sortValues, setSortValues] = useState({ sortBy: 'price', order: 'asc', input: "" });
  // const [input, setInput] = useState("")


  // const handleSelectedValues = (category) => {
  //   const [sortBy, order] = category.split('-')
  //   setSortValues({sortBy, order})
  // }

  
  // const handleSearch = (value) => {
  //   setInput(value)
  // }

  return (
    <div className="products-container">
      <div className="products-header">
        <h1 className="products-headertext">Products</h1>
      </div>
      <div className="products-sortcontainer">
        <ul>
          <li>
            Sort by:
            {/* <select onChange={(event) => handleSelectedValues(event.target.value)}>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-asc">Rating: Low to High</option>
              <option value="rating-desc">Rating: High to Low</option>
            </select> */}
          </li>
          <li>
            {/* <input type="text" placeholder="Search products..." onChange={(event) => handleSearch(event.target.value)} /> */}
          </li>
        </ul>
      </div>
      <div className="products-divider"></div>
      
        <ProductCard />
    
    </div>
  );
};

export default ProductsPage;
