import { NextRequest } from "next/server";

export const GET = async (req:NextRequest) => {
    const { searchParams } = new URL(req.url); 
    const searchQuery = searchParams.get("search"); 
    const sortQuery = searchParams.get("sortBy"); 
    const orderQuery = searchParams.get("order"); 
  
    let data;
  
    if (searchQuery) {
      data = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
    } else if (sortQuery && orderQuery) {
      data = await fetch(`https://dummyjson.com/products?sortBy=${sortQuery}&order=${orderQuery}`);
    } else {
      data = await fetch("https://dummyjson.com/products");}
  
    const response = await data.json();
  
    return Response.json(response.products);
  };