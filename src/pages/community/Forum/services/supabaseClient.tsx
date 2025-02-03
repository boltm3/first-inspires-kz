import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://flfvizypgjdxrwywhpvt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsZnZpenlwZ2pkeHJ3eXdocHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYwMDY0ODIsImV4cCI6MjA1MTU4MjQ4Mn0.TfR3lHbcZWEVnXF_Kx1O1B_RhVrzU9j0epXgfqOTA-c'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
