import { NextRequest } from "next/server";
import { createClient } from '@/utils/supabase/server';

interface Props {
  params: { id: number };
}

export const GET = async (req: NextRequest, { params }: Props) => {

  // const data = await fetch(`https://dummyjson.com/products/${params.id}`);

  // const singleProduct = await data.json();
  const supabase = await createClient();
  const { data, error } = await supabase   
  .from('products_multilang') // Replace 'table_name' with your table name
  .select('*')        // Select all columns or specify which ones you need
  .eq('id', params.id) // Replace 'id' with your primary key column name
  .single();          // Ensures only one row is returned     

  if (error) {
    console.error('Error fetching row:', error);
  }

  return Response.json(data);
};
