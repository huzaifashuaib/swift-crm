import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formData } = body;
    const { name, price, quantity, category, description } = formData;
    const id = nanoid(24);

    const newProduct = await prismadb.product.create({
      data: {
        id,
        name,
        price,
        category,
        quantity,
        description,
      },
    });
    return NextResponse.json(newProduct);

    // return NextResponse.json(body);
  } catch (error: any) {
    console.log("ADD PRODUCT ERROR", error);
    return new NextResponse(error, { status: 500 });
  }
}
