import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hpevnpobjseodqulwkif.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwZXZucG9ianNlb2RxdWx3a2lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMDU1ODQsImV4cCI6MjA2Mzc4MTU4NH0.dIOA3Ieasv_9I1iPGNrAbx-gEClp0-izssD1u_NnKbo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
