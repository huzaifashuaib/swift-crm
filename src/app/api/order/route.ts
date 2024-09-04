import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderDetail } = body;
    const {
      firstName,
      lastName,
      address,
      city,
      phoneNumber,
      postCode,
      products,
      totalBill,
      date,
      totalProfit
    } = orderDetail;

    if (
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !phoneNumber ||
      !postCode ||
      !products ||
      !totalBill ||
      !date ||
      !totalProfit
    ) {
      return new NextResponse("Please fill all fields", { status: 400 });
    }

    const newOrder = await prismadb.order.create({
      data: {
        firstName,
        lastName,
        address,
        city,
        phoneNumber,
        postCode,
        products,
        totalBill,
        date,
        totalProfit
      },
    });

    return NextResponse.json({
      message: "Order created successfully",
      newOrder,
    });
  } catch (error: any) {
    console.log("ADD ORDER ERROR", error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
