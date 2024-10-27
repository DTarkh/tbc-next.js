'use client'

import { useEffect, useState } from 'react';

const useProducts2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from API on component mount
    const fetchProducts = () => {
      fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => { setProducts(data.products);
        setLoading(false)} )
      
    };

    fetchProducts();
  }, []);

  return { products, setProducts, loading }

}

export default useProducts2;