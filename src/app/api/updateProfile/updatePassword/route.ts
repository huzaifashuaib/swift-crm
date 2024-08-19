import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/authOptions";
import axios from "axios";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const currentLogIn = session?.user?.email;

  if (!currentLogIn) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const body = await req.json();
    const {  password, newPassword } = body;

    const user = await prismadb.user.findUnique({
      where: {
        email: currentLogIn,
      },
    });
   
    let isPasswordValid = false;
    
    if (password && user?.hashedPassword) {
      isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    }
    if (!isPasswordValid) {
      return new NextResponse("Password is incorrect", { status: 403 });
    }
    
   

    if (isPasswordValid) {
      const newHashedPassword = await bcrypt.hash(newPassword, 12);
      const updatedUser = await prismadb.user.update({
        where: {
          email: currentLogIn,
        },
        data: {     
          hashedPassword: newHashedPassword,
        },
      });
      return NextResponse.json({
        message: "Profile updated successfully",
        updatedUser,
      });
    }
  } catch (error: any) {
    console.log("UPDATE PROFILE ERROR", error);
    return new NextResponse(error, { status: 500 });
  }
}
