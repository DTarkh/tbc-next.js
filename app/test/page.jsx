import { createClient } from '@/utils/supabase/server';

export default async function Countries() {
  const supabase = await createClient();
  const { data, error } = await supabase.from('products').select();
  console.log('Fetched Products:', data);

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}