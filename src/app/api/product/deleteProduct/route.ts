import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;
    console.log(id)
    if (!id) {
      return new NextResponse("Product ID is required", { status: 400 });
    }

    const deletedProduct = await prismadb.product.delete({
      where: { id },
    });

    return NextResponse.json(id);
  } catch (error: any) {
    console.log("DELETE PRODUCT ERROR", error);
    return new NextResponse(error, { status: 500 });
  }
}
