const fetchProducts = async (input) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${input}`
  );
  const { products } = response.json();

  return { products };
};

export default fetchProducts;
