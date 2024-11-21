import { NextRequest } from "next/server";
import { createClient } from '@/utils/supabase/server';

interface Props {
  params: { id: number };
}

export const GET = async (req: NextRequest, { params }: Props) => {

  
  const supabase = await createClient();
  const { data, error } = await supabase   
  .from('blog_multilang') 
  .select('*')       
  .eq('id', params.id) 
  .single();             

  if (error) {
    console.error('Error fetching row:', error);
  }

  return Response.json(data);
};
