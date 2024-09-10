import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";
import { nanoid } from "nanoid";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return new NextResponse("Missing email", { status: 400 });
    }

    const user = await prismadb.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const token = nanoid(14);

    var transport = nodemailer.createTransport({
      service: "gmail",
      port: 587, // Use 587 for TLS or 465 for SSL
      auth: {
        user: process.env.NODE_MAILER_USER,
        pass: process.env.NODE_MAILER_PASS,
      },
    });

    const htmlBody = `Click here to <a href='http://localhost:3000/resetpassword/${token}'>Reset Password</a>`;

    await transport.sendMail({
      from: '"Huzaifa Shoaib 👻" <huzaifashoaib7@gmail.com>',
      to: email,
      subject: "Reset Your Password",
      text: "Reset Password",
      html: htmlBody,
    });

    await prismadb.user.update({
      where: { email },
      data: { verifyToken: token },
    });

    return new NextResponse("Password reset email sent", { status: 200 });
  } catch (error: any) {
    console.error("FORGET PASSWORD ERROR:", error.message || error);
    return new NextResponse("Error processing request", { status: 500 });
  }
}
