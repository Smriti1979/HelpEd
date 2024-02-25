import NextAuth from "next-auth"
import { Account, User as AuthUser } from "next-auth"
import InstagramProvider from "next-auth/providers/instagram";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcryptjs"
import connect from "@/utils/db";

export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email })
          if (user) {
            const isPasswordCorrrect = await bcrypt.compare(credentials.password, user.password)
            if (isPasswordCorrrect) {
              return user;
            }
          }

        } catch (err: any) {
          throw new Error(err);
        }
      }
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID ?? "",
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? ""
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID ?? "",
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET ?? ""
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ""
    }),
    // // ...add more providers here
  ],
  callbacks: {
    async signIn(user: AuthUser, account: Account, profile:any) {
      return true
    },
    async redirect(url:any, baseUrl:any) {
      return baseUrl
    },
    async session(session:any, user: AuthUser) {
      return session
    },
    async jwt(token:any, user: AuthUser, account: Account, profile:any, isNewUser:any) {
      return token
    }
  }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST, handler as PUT, handler as DELETE }
