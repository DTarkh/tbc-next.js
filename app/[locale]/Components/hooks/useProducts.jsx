const fetchProducts = async (search, sortBy, sortOrder) => {
  let response;

  if (search) {
    response = await fetch(`http://localhost:3000/api/products?search=${search}`);
  } else if (sortBy && sortOrder) {
    response = await fetch(`http://localhost:3000/api/products?sortBy=${sortBy}&order=${sortOrder}`);
  } else {
    response = await fetch(`http://localhost:3000/api/products`);
  }

  const data = await response.json();
  return data;
};

export default fetchProducts;


