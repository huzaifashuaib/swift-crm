

import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prismadb from "@/app/libs/prismadb";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter Your Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please provide both email and password.");
        }

        const user = await prismadb.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("User not found.");
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.hashedPassword);

        if (!isPasswordValid) {
          throw new Error("Invalid email or password.");
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session }) {
      if (session?.user?.email) {
        const user = await prismadb.user.findUnique({
          where: { email: session.user.email },
        });

        if (user) {
          session.user.name = user.userName ?? "User";
          session.user.image = user.imgUrl ?? "";
        }
      }

      return session;
    },
  },
  debug: process.env.NODE_ENV !== "production",
};
