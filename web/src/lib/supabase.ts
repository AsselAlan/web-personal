import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bbkjsnjlabwbnqnaieem.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJia2pzbmpsYWJ3Ym5xbmFpZWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMzkwMDUsImV4cCI6MjA5NjYxNTAwNX0.AClx1RqB1UjsJvMiEtwsHoAmzqXGYoTQGafLfE531zA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
