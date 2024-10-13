"use client";

import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?sortBy=title&order=asc`)
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return { products };
};

export default useProducts;
