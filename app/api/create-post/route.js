import connectDb from "@/lib/utils/connectDb";
import { NextResponse } from "next/server";
import Post from "@/lib/models/post";

export async function POST(req){
    try{
        const {category,title,author,content,postPic,videoSrc} = await req.json();

        const saver = new Post({
            category,
            title,
            author,
            content,
            postPic,
            videoSrc
        });
        
        await connectDb();
        await saver.save();

        return NextResponse.json({message:'Post Created'},{status:201});

    } catch(err){
        console.log(err.message);
        return NextResponse.json({message:'Error Occured'},{status:500});
    }
}