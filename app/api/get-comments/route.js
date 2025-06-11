import connectDb from "@/lib/utils/connectDb";
import { NextResponse } from "next/server";
import Comment from "@/lib/models/comment";


export async function GET(req){
    try{
        const {searchParams} = new URL(req.url);
        const postId = searchParams.get('postId');

        await connectDb();

         const comments = await Comment.find({ postId }).sort({ createdAt: -1 }).lean();

         return NextResponse.json(comments, { status: 200 });

    }catch(err){
        console.log(err.message);
        return NextResponse.json({message:'Error Occured'},{status:500});
    }
}