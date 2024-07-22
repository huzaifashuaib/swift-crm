import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/(components)/nav/Nav";
import Footer from "@/(components)/footer/Footer";

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
        <div className="min-h-screen w-full bg-backgroundImg bg-no-repeat bg-bottom-left bg-cover">
          <div className="flex mx-[72px] mt-[22px] min-h-screen">
            <div className="w-[19%]">
              <Nav />
            </div>
            <div className="w-[81%]">{children}</div>
          </div>
          <footer className="bg-[#ffffff] mt-[67px]">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
