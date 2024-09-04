import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formData } = body;
    const { name, price, quantity, category, description,imgUrl,publicId,purchasePrice } = formData;
    if(name=="" || price=="" || quantity=="" || category=="" || description=="" || imgUrl=="" || purchasePrice==""){
      return new NextResponse("Please All Fields")
    }

    const newProduct = await prismadb.product.create({
      data: {
        name,
        price,
        category,
        quantity,
        description,
        imgUrl,
        publicId,
        purchasePrice
      },
    });

    return NextResponse.json(newProduct);

  } catch (error: any) {
    console.log("ADD PRODUCT ERROR", error);
    return new NextResponse(error, { status: 500 });
  }
}
