import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";

export async function GET(req: Request) {
  try {
    const products = await prismadb.product.findMany();
    return NextResponse.json(products);
  } catch (error: any) {
    console.error("GET PRODUCTS ERROR", error);
    return new NextResponse("Error retrieving products", { status: 500 });
  }
}