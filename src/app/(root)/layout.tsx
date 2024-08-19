import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../libs/authOptions";
import { redirect } from "next/navigation";
import Nav from "@/(components)/nav/Nav";
import Footer from "@/(components)/footer/Footer";

type ProtectedRootLayoutProps = {
  children: React.ReactNode;
};

const ProtectedRootLayout = async ({ children }: ProtectedRootLayoutProps) => {
  const session = await getServerSession(authOptions);
  console.log(session?.user?.email,);
  if (!session?.user?.email) {
    redirect("/signin");
  }

  return (
    <main>
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
    </main>
  );
};

export default ProtectedRootLayout;
