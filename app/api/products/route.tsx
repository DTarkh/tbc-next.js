import { NextRequest } from "next/server";
import { createClient } from '@/utils/supabase/server';

export const GET = async (req:NextRequest) => {

  const supabase = await createClient();
  const { data, error } = await supabase.from('products_multilang').select();
  
  if (error) {
    console.error('Error fetching row:', error);
  } 

    // const { searchParams } = new URL(req.url); 
    // const searchQuery = searchParams.get("search"); 
    // const sortQuery = searchParams.get("sortBy"); 
    // const orderQuery = searchParams.get("order"); 
  
    // let data;
  
    // if (searchQuery) {
    //   data = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
    // } else if (sortQuery && orderQuery) {
    //   data = await fetch(`https://dummyjson.com/products?sortBy=${sortQuery}&order=${orderQuery}`);
    // } else {
    //   data = await fetch("https://dummyjson.com/products");}
  
    // const response = await data.json();
  
    return Response.json(data);
  };