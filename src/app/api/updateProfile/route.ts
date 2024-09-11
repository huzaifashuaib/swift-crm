import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";
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
    const { email, userName, imgUrl, publicId } = body;

    const user = await prismadb.user.findUnique({
      where: {
        email: currentLogIn,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const updatedUser = await prismadb.user.update({
      where: {
        email: currentLogIn,
      },
      data: {
        userName,
        email,
        imgUrl: imgUrl || user.imgUrl,
        publicId: publicId || user.publicId,
      },
    });

    const shouldSignOut = user.email !== email;

    return NextResponse.json({
      message: "Profile updated successfully",
      updatedUser,
      shouldSignOut,
    });
  } catch (error: any) {
    console.log("UPDATE PROFILE ERROR", error);
    return new NextResponse(error.message || "Internal Server Error", { status: 500 });
  }
}
