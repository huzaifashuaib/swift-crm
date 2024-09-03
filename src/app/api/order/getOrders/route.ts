import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";

export async function GET(req: Request) {
  try {
    const orders = await prismadb.order.findMany();
    return NextResponse.json(orders);
  } catch (error: any) {
    console.error("GET ORDERS ERROR", error);
    return new NextResponse("Error retrieving orders", { status: 500 });
  }
}