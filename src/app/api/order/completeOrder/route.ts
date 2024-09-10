// import { NextResponse } from "next/server";
// import prismadb from "@/app/libs/prismadb";


// export async function PUT(req: Request) {
//   try {
//     const body = await req.json();
//     const {id}=body;
//     if(!id){
//         return new NextResponse("Order ID missing", { status: 400 });
//     }
//     const updatedOrder = await prismadb.order.update({
//         where: { id },
//         data: {

//             status:"completed"
//         },
//       });
//     return new NextResponse("Order Completed Successfully")
//   } catch (error: any) {
//     console.error("ORDER OPERATION ERROR", error);
//     return new NextResponse("Error processing request", { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return new NextResponse("Order ID missing", { status: 400 });
    }

    // Validate if the order exists before updating
    const existingOrder = await prismadb.order.findUnique({
      where: { id },
    });

    if (!existingOrder) {
      return new NextResponse("Order not found", { status: 404 });
    }

    const updatedOrder = await prismadb.order.update({
      where: { id },
      data: {
        status: "completed",
      },
    });

    return new NextResponse("Order Completed Successfully", { status: 200 });
  } catch (error: any) {
    // Improved error logging
    console.error("ORDER OPERATION ERROR:", error.message || error);
    return new NextResponse("Error processing request", { status: 500 });
  }
}