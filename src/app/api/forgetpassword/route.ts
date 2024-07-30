import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";
import { nanoid } from "nanoid";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;
    if (!email) {
      return new NextResponse("Missing Data", { status: 500 });
    }
    const userExist = await prismadb.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userExist) {
      const token = nanoid(14);
      console.log(token);
      console.log("user exist");
      var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.NODE_MAILER_USER,
          pass: process.env.NODE_MAILER_PASS,
        },
      });
      const htmlBody = `Click here to <a href='http://localhost:3000/resetpassword/${token}'>Reset Password</a>`;
      const info = await transport.sendMail({
        from: '"Huzaifa Ojla 👻" huzaifaojla1@gmail.com',
        to: email,
        subject: "Hello how are You!",
        text: "Rest Password",
        html: htmlBody,
      });

      console.log("Message sent: %s", info.messageId);

      await prismadb.user.update({
        where: { email },
        data: {
          verifyToken:token
        },
      });
    } else {
      console.log("user not exist");
    }

    return NextResponse.json("send");
  } catch (error: any) {
    console.log("FORGET ERROR", error);
    return new NextResponse(error, { status: 500 });
  }
}
