import { AuthResponse } from "@supabase/supabase-js";
import { supabase } from "./SupabaseConfig";


export async function createUser(email: string, password: string): Promise<AuthResponse | undefined> {
    if (!email || !password) {
        return;
    }

    return await supabase.auth.signUp({email, password});
}

export async function login(email: string, password: string): Promise<AuthResponse | undefined> {
    if (!email || !password) {
        return;
    }

    return await supabase.auth.signInWithPassword({email, password});
}