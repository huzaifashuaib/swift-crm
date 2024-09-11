import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";
import { Prisma } from "@prisma/client";

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;
    console.log(id);
    if (!id) {
      return new NextResponse("Product ID is required", { status: 400 });
    }

    const deletedProduct = await prismadb.product.delete({
      where: { id },
    });

    return NextResponse.json(deletedProduct);
  } catch (error: any) {
    if (error.code === "P2025") {
      return new NextResponse("Product Not Found ❌", { status: 404 });
    }
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
