"use server"

import { db } from "@/app/server";

export default async function getPosts() {
    const posts = await db.query.postsTable.findMany()

    if (posts) {
        return {error: "No post found"}
    }
    return {success: posts }
}


// "use server";

// import { postsTable } from "@/app/server/schema"; // Ensure correct import
// import { db } from "@/app/server"; // Ensure correct db instance import

// export default async function getPosts() {
//     const posts = await db.select().from(postsTable);

//     if (posts.length === 0) {
//         return { error: "No post found" };
//     }

//     return { success: posts };
// }