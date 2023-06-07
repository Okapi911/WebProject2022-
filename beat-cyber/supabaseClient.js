import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://jifpotcjgxluuztxkobe.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppZnBvdGNqZ3hsdXV6dHhrb2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU4OTA4MjAsImV4cCI6MjAwMTQ2NjgyMH0.BVPyl4s57qWyX5DYLsmJvdiTOZlmKL3jZBJmZ-JDyfo"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)