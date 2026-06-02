import { createClient } from "@supabase/supabase-js";


const email = process.env.NEXT_LOCAL_SUPABASE_URL
const password = process.env.NEXT_LOCAL_SUPABASE_KEY

export const supabase = createClient(email!, password!)