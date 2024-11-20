type ProductsParam = string | string[] | undefined;

const fetchProducts = async (
  search: ProductsParam,
  sortBy: ProductsParam,
  sortOrder: ProductsParam
) => {
  if (search) {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );
    const data = await response.json();

    return data.products;
  } else if (sortBy && sortOrder) {
    const response = await fetch(
      `https://dummyjson.com/products?sortBy=${sortBy}&order=${sortOrder}`
    );
    const data = await response.json();

    return data.products;
  } else {
    const response = await fetch(`http://localhost:3000/api/products`);
    const products = await response.json();

    return products;
  }
};

export default fetchProducts;
