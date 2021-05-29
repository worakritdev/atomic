import client from "$lib/database/mongodb";

export async function get() {
    const db = await client.connect();
    
}