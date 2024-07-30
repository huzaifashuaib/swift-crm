import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/(components)/Nav/Nav";
import Footer from "@/(components)/Footer/Footer";
import ToastProvider from "../../providers/ToastProvider";
import NextAuthSessionProvider from "../../providers/NextAuthSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swift-CRM",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <ToastProvider />
      <NextAuthSessionProvider>
        {children}
        </NextAuthSessionProvider>
    </body>
  </html>
  );
}
