"use client";

import { useState, useEffect } from "react";

const useProducts = (sortBy = "title", order = "asc", input = "") => {
  const [products, setProducts] = useState([]);


if (input){

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${input}`)
          .then((response) => response.json())
          .then((data) => setProducts(data.products));
      }, [input]);
    
      return { products };

}

  useEffect(() => {
    fetch(`https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, [sortBy, order]);

  return { products };
};

export default useProducts;
