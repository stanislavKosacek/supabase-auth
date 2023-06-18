import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://XXX.supabase.co';
const key = 'xxx';

export const getSupabase = () => {
  return createClient(SUPABASE_URL, key);
};
