"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://dummyjson.com/products"

const useProducts2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  axios.get(URL)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      });
  }, []);

  return { products, setProducts, loading };
};

export default useProducts2;
