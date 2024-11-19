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
    const response = await fetch(`https://dummyjson.com/products`);
    const data = await response.json();

    return data.products;
  }
};

export default fetchProducts;