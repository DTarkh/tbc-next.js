"use client";

import { useState, useEffect } from "react";

const useProducts = (sortBy = 'title', order = 'asc') => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, [sortBy, order]);

  return { products };
};

export default useProducts;
