import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = '';

export const getSupabase = () => {
  return createClient(SUPABASE_URL, localStorage.getItem('key'));
};
