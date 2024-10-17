




const fetchProducts = async (sortBy, sortOrder) => {

  if (sortBy && sortOrder){
    const response = await fetch(`https://dummyjson.com/products?sortBy=${sortBy}&order=${sortOrder}`);
    const data = await response.json();
  

    return data.products;


  }


  const response = await fetch(`https://dummyjson.com/products`);
  const data = await response.json();

  return data.products;
};

export default fetchProducts;
