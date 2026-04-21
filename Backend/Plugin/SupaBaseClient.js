const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

if (!supabase && (supabaseUrl || supabaseAnonKey)) {
  console.warn('Supabase: both SUPABASE_URL and SUPABASE_ANON_KEY must be set in .env; auth endpoints will be disabled.');
}

module.exports = supabase;
