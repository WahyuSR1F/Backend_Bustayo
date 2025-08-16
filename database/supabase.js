import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pazmxfntveqaohwvdqsp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhem14Zm50dmVxYW9od3ZkcXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNzEwODEsImV4cCI6MjA3MDg0NzA4MX0.2lJHksVcoRwaHIkm8dGBO0kkkhtJOvfvolGsM_Pc_XI';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
