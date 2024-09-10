import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "../../providers/ToastProvider";
import NextAuthSessionProvider from "../../providers/NextAuthSessionProvider";
import Provider from "../../providers/StoreProvider";

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
        <Provider>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </Provider> 
      </body>
    </html>
  );
}
