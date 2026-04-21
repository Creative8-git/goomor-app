import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://tqpnnujxrnptfhdgmtze.supabase.co'; // Found in Supabase dashboard
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcG5udWp4cm5wdGZoZGdtdHplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MDMwNzMsImV4cCI6MjA0NzQ3OTA3M30.zIMvOxFNOaqFI4qy-hFCzhOka_pn6wp-1yB9QGnnBHE'; // Found in Supabase dashboard > Settings > API > Project API keys

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
