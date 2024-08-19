import { NextResponse } from "next/server";
import Cloudinary from "cloudinary"

Cloudinary.v2.config({
    cloud_name:process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECRET_KEY
})

const RemoveImage=async(publicId:string)=>{
    console.log(publicId)
    try {
        const res= await Cloudinary.v2.uploader.destroy(publicId)
        console.log("Image Removed Successfully",res)
        
    } catch (error) {
        console.log(error)
    }

}


export async function POST(req:Request){
    const body=await req.json()
    const {userPublicId}=body
    try {
        const res= await Cloudinary.v2.uploader.destroy(userPublicId)
        console.log("Image Removed Successfully",res)
        
    } catch (error) {
        console.log(error)
    }

   
 return NextResponse.json({message:"success"})
}
    