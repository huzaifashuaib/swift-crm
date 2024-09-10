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
        <div className="xl:flex xl:gap-[41px] 2xl:gap-[29px]  ml-[43px] mr-[45px] md:mx-[39px] lg:mx-[72px] mt-0 md:mt[21px] lg:mt-[22px] min-h-screen">
          <div className=" w-full xl:w-[19%] ">
            <Nav />
          </div>
          <div className="w-full xl:w-[81%]">{children}</div>
        </div>
        <footer className="bg-white mt-[67px]">
          <Footer />
        </footer>
      </div>
    </main>
  );
};

export default ProtectedRootLayout;
