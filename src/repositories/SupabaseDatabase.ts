import { supabase } from "./SupabaseConfig";

export async function insertData(tableName: string, data: any) {
    try {
        console.log("entrou no insert data")
        await supabase.from(tableName).insert(data);
    } catch (err) {
        console.log(err);
    }
}

export async function deleteData(tableName: string, data: string) {
    try {
        console.log(tableName)
        await supabase.from(tableName).delete().eq('nome', data);
    } catch (err) {
        console.log(err);
    }
}