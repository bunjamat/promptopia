import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      //connect database
      await connectToDB();

      //check if a user already exists
      //ตรวจสอบว่ามีผู้ใช้อยู่แล้วหรือไม่

      // if not create a new user

      return true;
    } catch (error) {
      console.log("🚀 ~ file: route.js:28 ~ signIn ~ error:", error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
