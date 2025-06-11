import connectDb from "@/lib/utils/connectDb";
import { NextResponse } from "next/server";
import Comment from "@/lib/models/comment";


export async function POST(req){
    try{
        const {name, comment, postId} = await req.json();

        await connectDb();

         const comments = new Comment({
            name,
            comment,
            postId
         });

         const savedComment = await comments.save();

         return NextResponse.json({message:'Commented successfully', comment:savedComment},{ status: 200 });

    }catch(err){
        console.log(err.message);
        return NextResponse.json({message:'Error Occured'},{status:500});
    }
}