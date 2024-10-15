"use server"

import { db } from "@/app/server";
// import { postsTable } from "@/app/server/schema";
import { revalidatePath } from "next/cache";

export default async function createPost(formData: FormData) {
    const title = formData.get("title")?.toString()
    if (!title) {
        return{error: "This is required"}
    }
    revalidatePath('/')
    const post = await db.insert(posts).values({
        title,
    })
    return {success: post }
}

