import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";
import axios from "axios";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, name, price, quantity, category, description,imgUrl,publicId } = body;

    if (!id) {
      return new NextResponse("Product ID is required", { status: 400 });
    }

    if (name || price || quantity || category || description || imgUrl || publicId) {
      // if (publicId) {
      //   const productPublicId=publicId;
      //   const response = await axios.post(
      //     "https://swift-crm-techloset.vercel.app/api/removeImageCloud",
      //     { productPublicId }
      //   );
  
      //   if (response.status !== 200) {
      //     throw new Error(`Failed to remove image: ${response.statusText}`);
      //   }
      // }

      const updatedProduct = await prismadb.product.update({
        where: { id },
        data: {
          name,
          price,
          quantity,
          category,
          description,
          imgUrl
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
