import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prismadb from "@/app/libs/prismadb";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your Email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing Credentials");
        }

        const user = await prismadb.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user.id || !user.hashedPassword) {
          throw new Error("Invalid credentials");
        }
        const currentHashedPassword = await bcrypt.hash(
          credentials.password,
          12
        );
        const correctPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!correctPassword) {
          throw new Error("Invalid credentials");
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
          session.user.name =user?.userName;
          session.user.image = user?.imgUrl;
        }
      }

      return session;
    },

  },
 

  debug: process.env.NODE_ENV !== "production",
};
