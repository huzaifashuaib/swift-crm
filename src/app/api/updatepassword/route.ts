import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { newPassword, token } = body;
    if (!newPassword && !token) {
      return new NextResponse("Missing Data", { status: 500 });
    }
    const newHashedPassword = await bcrypt.hash(newPassword, 12);
    const result = await prismadb.user.updateMany({
      where: {
        verifyToken: token,
      },
      data: {
        hashedPassword: newHashedPassword,
      },
    });

    if (result.count === 0) {
      return new NextResponse("Token not found", { status: 404 });
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.log("RESET PASSWORD ERROR", error);
    return new NextResponse(error, { status: 500 });
  }
}
