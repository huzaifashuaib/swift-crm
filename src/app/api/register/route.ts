import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name,email, password } = body;
    if (!email || !password) {
      return new NextResponse("Missing Data", { status: 500 });
    }
    const userAlreadyExist = await prismadb.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExist?.id) {
      return new NextResponse("User Already Exist", { status: 500 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prismadb.user.create({
      data: {
        email: email,
        userName:name,
        hashedPassword: hashedPassword,
      },
    });
    return NextResponse.json(newUser);
  } catch (error: any) {
    console.log("REGISTER ERROR", error);
    return new NextResponse(error, { status: 500 });
  }
}
