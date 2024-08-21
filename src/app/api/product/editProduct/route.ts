import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, name, price, quantity, category, description } = body;

    if (!id) {
      return new NextResponse("Product ID is required", { status: 400 });
    }

    if (name || price || quantity || category || description) {
      const updatedProduct = await prismadb.product.update({
        where: { id },
        data: {
          name,
          price,
          quantity,
          category,
          description,
        },
      });

      return NextResponse.json(updatedProduct);
    } else {
  
      const product = await prismadb.product.findUnique({
        where: { id },
      });

      if (!product) {
        return new NextResponse("Product not found", { status: 404 });
      }

      return NextResponse.json(product);
    }
  } catch (error: any) {
    console.error("PRODUCT OPERATION ERROR", error);
    return new NextResponse("Error processing request", { status: 500 });
  }
}
