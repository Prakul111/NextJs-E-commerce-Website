import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/app/server/schema"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_ID,
    }),
    Github({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ],
})






















