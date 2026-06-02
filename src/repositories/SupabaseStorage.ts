import { supabase } from "./SupabaseConfig";

export async function uploadStudentImage(storeName: string, imageFile: File) {
    const { data, error } = await supabase.storage
            .from(storeName)
            .upload(imageFile.name, imageFile, {
                    cacheControl: '3600',
                    upsert: false
            });

    if (error) throw error;
    return data;
}