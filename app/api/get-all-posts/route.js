import connectDb from "@/lib/utils/connectDb";
import { NextResponse } from "next/server";
import Post from "@/lib/models/post";


export async function GET(req){
    try{
        await connectDb();

        const posts = await Post.find().sort({createdAt: - 1}).lean();

        return NextResponse.json(posts,{status:201});

    }catch(err){
        console.log(err.message);
        return NextResponse.json({message:'Error Occured'},{status:500});
    }
}