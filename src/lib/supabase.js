import { createClient } from '@supabase/supabase-js';

// These are public client credentials. Storage write access is enforced by RLS.
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://medfzlhwjnwooftmkdyp.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'sb_publishable_0_9Yz1QBiDOfkxK4d4kUkQ_n2LWRP-F';

export const supabase = createClient(supabaseUrl, supabaseKey);
export const PHOTO_BUCKET = 'glow-by-esha-photos';
export const ADMIN_EMAIL = 'sudiphazra0689@gmail.com';
