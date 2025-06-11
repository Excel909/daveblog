'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import '@/app/globals.css';
import { formatDate } from "@/lib/functions/dateFormatter";
import Image from "next/image";
import ReactPlayer from "react-player";
import CusdisComments from "./components/comment";

export default function ViewPost(){
    const {slug} = useParams();
    const [post,setPost] = useState([]);
    
    useEffect(() => {
        const getPost = async() => {
            try{
                const id = slug;
                const res = await fetch(`/api/get-post?id=${id}`)

                if(!res.ok){
                    alert('Error getting Post');
                }

                const data = await res.json();
                console.log(data); 

                setPost(data);

            } catch(err){
                console.log(err.message);
            }
        };

        getPost();

    },[])
    

    return(
        <>
            <div className="container m-auto mt-10 p-5">
                <div className='w-fit m-auto p-3 bg-slate-500 text-white font-bold text-sm'>
                    {post?.category || 'category'}
                </div>

                <div className="lg:mt-10 mt-5 w-full text-center font-quicksand font-semibold lg:text-4xl text-xl">
                    {post?.title || 'title'}
                </div>

                <div className="lg:mt-10 mt-5 w-full text-center font-quicksand font-semibold lg:text-xl">
                   {formatDate(post?.createdAt) || 'date'}
                </div>


                <div className='w-full lg:h-[60vh] overflow-hidden mt-8 h-[40vh]'>
                    <Image src={post?.postPic} alt='blog pic' height={1000} width={1000} className='w-full h-full object-cover'/>
                </div>


                <div className="mt-10 pb-[100px] font-quicksand w-full text-lg">
                    {post?.content || 'Loading...'}
                </div>


                {post.videoSrc && <div className="w-full mt-10 pb-[100px]">
                        <ReactPlayer
                            url={post.videoSrc} 
                            controls
                            width="100%"
                            config={{
                                file: {
                                attributes: {
                                    controlsList: 'nodownload',
                                },
                                },
                            }}
                            />
                </div>}

                {post.title && <CusdisComments post={post} />}
            </div>
        </>
    )
}