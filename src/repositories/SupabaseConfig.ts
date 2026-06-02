import { createClient } from "@supabase/supabase-js";


const email = process.env.NEXT_PUBLIC_SUPABASE_URL;
const password = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(email!, password!);