import connectDb from "@/lib/utils/connectDb";
import { NextResponse } from "next/server";
import Post from "@/lib/models/post";


export async function GET(req){
    try{
        const {searchParams} = new URL(req.url);
        const id = searchParams.get('id');

        await connectDb();

        const postSaver = await Post.findOneAndUpdate({_id:id},{$inc: {views:1}}, {new:true, lean:true});

        return NextResponse.json(postSaver,{status:201});

    }catch(err){
        console.log(err.message);
        return NextResponse.json({message:'Error Occured'},{status:500});
    }
}