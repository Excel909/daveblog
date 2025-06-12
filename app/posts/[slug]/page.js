'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import '@/app/globals.css';
import { formatDate } from "@/lib/functions/dateFormatter";
import Image from "next/image";
import ReactPlayer from "react-player";
import { IoEyeSharp } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa6";

export default function ViewPost() {
    const { slug } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [loading,setLoading] = useState(false);
    const [postLoading,setPostLoading] = useState(false);



    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await fetch(`/api/get-post?id=${slug}`);
                if (!res.ok) alert('Error getting Post');
                const data = await res.json();
                setPost(data);
                setPostLoading(true);
            } catch (err) {
                console.log(err.message);
            }
        };

        const getComments = async () => {
            try {
                const res = await fetch(`/api/get-comments?postId=${slug}`);
                const data = await res.json();
                setComments(data);
            } catch (err) {
                console.log(err.message);
            }
        };

        getPost();
        getComments();
    }, [slug]);

    const handleCommentSubmit = async () => {
        if (!name || !comment) return alert("Please fill in all fields.");
        try {
            setLoading(true);

            const bod = {
                name, comment, postId: slug 
            };

            const res = await fetch('/api/create-comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bod)
            });

            if (res.ok) {
                setComment('');
                setName('');
                const msg = await res.json();

                setComments([msg.comment, ...comments]);
                setLoading(false);
            } else {
                alert("Failed to submit comment.");
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    if (!postLoading || !post) {
        return <p className="w-full text-center py-20 text-xl font-medium">Loading post...</p>;
    }

    return (
        <>
            <div className="container m-auto mt-10 p-5">
            <div className='w-fit m-auto p-3 bg-slate-500 text-white font-bold text-sm'>
                {post?.category || 'Category'}
            </div>

            <div className="lg:mt-10 mt-5 w-full text-center font-quicksand font-semibold lg:text-4xl text-xl">
                {post?.title || 'GreatDave'}
            </div>

            <div className="lg:mt-10 mt-5 w-full text-center font-quicksand font-semibold lg:text-xl">
                {formatDate(post?.createdAt) || 'date'}
            </div>

            <div className='w-full lg:h-[60vh] overflow-hidden mt-8 h-[40vh]'>
                <Image src={post?.postPic} alt='blog pic' height={1000} width={1000} className='w-full h-full object-cover' />
            </div>

            <div className="mt-10 font-quicksand w-full text-lg leading-loose">
                {post?.content || 'Loading...'}
            </div>

            <div className='mt-10 mb-[100px] bg-gray-100 p-5'>

                <div className="flex justify-center items-center gap-2 w-fit"><FaPenNib /><i>{post?.author}</i></div>
                
                <div className='mt-2 flex justify-center items-center gap-2 w-fit'><IoEyeSharp />{post?.views}</div>
            </div>

            {post.videoSrc && (
                <div className="w-full mt-10 pb-[100px]">
                    <ReactPlayer
                        url={post.videoSrc}
                        controls
                        width="100%"
                        config={{
                            file: { attributes: { controlsList: 'nodownload' } }
                        }}
                    />
                </div>
            )}

            {/* Comment Section */}
            <div className='w-full mt-10 max-w-2xl mx-auto'>
                <h2 className='text-2xl font-bold mb-4'>Comments</h2>
                <div className='flex flex-col gap-3 mb-6'>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='p-3 border border-gray-300 rounded-lg w-full focus:outline-none'
                    />
                    <textarea
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className='p-3 border border-gray-300 rounded-lg w-full focus:outline-none'
                        rows={4}
                    />
                    <button
                        onClick={handleCommentSubmit}
                        className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition'
                    >
                        {loading ? 'Submitting..' : 'Submit'}
                    </button>
                </div>

                <div className='space-y-6 max-h-[50vh] overflow-scroll custom-scrollbar-hidden '>
                    {comments.length > 0 ? comments.map((c, i) => (
                        <div key={i} className='border p-4 rounded-lg shadow-sm'>
                            <div className='font-semibold'>{c.name}</div>
                            <div className='text-sm text-gray-600 mt-1'>{formatDate(c.createdAt)}</div>
                            <p className='mt-2'>{c.comment}</p>
                        </div>
                    )) : <p className='text-gray-500 text-lg'>No comments yet. Be the first!</p>}
                </div>
            </div>
        </div> 

        </>
    );
}
