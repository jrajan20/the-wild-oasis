
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://wtcsavzcoikhamnxuugl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0Y3Nhdnpjb2lraGFtbnh1dWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MTMxMjIsImV4cCI6MjA5OTI4OTEyMn0.6k1dHGBcNimUCbvQvZrkMQIwsbfZFIHVz-jkJ7FRVLE";
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase