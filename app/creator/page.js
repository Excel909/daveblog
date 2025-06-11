'use client';
import '@/app/globals.css';
import { useState } from 'react';
import style from './styles/creator.module.css';
import { FaFileImage } from "react-icons/fa";
import Image from 'next/image';

export default function Creator(){
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content,setContent] = useState('');
    const [video,setVideo] = useState('');
    const [image,setImage] = useState('');
    const [loading,setLoading] = useState(false);


    const selector = (e) => {
        setCategory(e.target.value);
    };

    const setPicture = (e) => {
        const file = e.target.files[0];

        if(!file){
            alert('no picture selected');
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            const img = reader.result;
            setImage(img);
        }

        reader.readAsDataURL(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            setLoading(true);
            const postPic = image;
            const videoSrc = video;
            const bod = {
                category,
                title,
                author,
                content,
                postPic,
                videoSrc
            };

            const res = await fetch(`/api/create-post`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(bod)
            });

            const data = await res.json();

            if(!res.ok){
                alert('Error Creating post contact developer');
            }

            alert('Post Created');
            
            setCategory('');
            setTitle('');
            setAuthor('');
            setContent('');
            setImage('');
            setVideo('');

        }catch(err){
            console.log(err.message);
        } finally{
            setLoading(false)
        }
    } 

    return(
        <>
            <div className='container p-5 m-auto mt-5'>
                <div className='text-2xl font-quicksand font-semibold w-full text-center'>
                    <div className={`${style.loader} m-auto mb-5`}></div>
                    Hello GreatDave it's time to Inspire...<br />
                    {category}
                </div>

                <div className='w-full flex justify-center p-3 mt-10'>
                    <div className='w-fit'>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='category'>
                            <select id='category' className='m-auto bg-gray-100 p-5 w-full font-semibold cursor-pointer' onChange={selector} required value={category}>
                                <option value=''>Select Your Post Category</option>
                                <option value='Storytelling'>
                                    Storytelling
                                </option>

                                <option value='Mindfulness'>
                                    Mindfulness
                                </option>

                                <option value='Books/ideas'>
                                    Books/Ideas
                                </option>

                                <option value='Philosophy'>
                                    Philosophy
                                </option>

                                <option value='Awareness'>
                                    Awareness
                                </option>
                            </select>
                        </label> <p />

                        <label htmlFor='title'>
                            <input type='text' required className='mt-5 lg:w-[50vw] w-[350px] p-5 rounded-md bg-gray-100 focus:outline-0 focus:border-2 focus:border-slate-600' placeholder='Title' id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </label><p />

                        <label htmlFor='author'>
                            <input type='text' required className='mt-5 lg:w-[50vw] w-[350px] p-5 rounded-md bg-gray-100 focus:outline-0 focus:border-2 focus:border-slate-600' placeholder='Author' id='author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
                        </label><p />

                        <label htmlFor='content'>
                            <textarea type='text' required className='mt-10 lg:w-[50vw] w-[350px] lg:h-[400px] h-[200px] p-5 rounded-md bg-gray-50 focus:outline-0 focus:border-2 focus:border-slate-600 shadow-md' placeholder='Your blog content goes here...' id='content' value={content} onChange={(e) => setContent(e.target.value)}/>
                        </label><p />

                        <label htmlFor='video'>
                            <input type='text' className='mt-5 lg:w-[50vw] w-[350px] p-5 rounded-md bg-gray-100 focus:outline-0 focus:border-2 focus:border-slate-600' placeholder='Do you have a video? (paste youtube or video url here) ' id='video' value={video} onChange={(e) => setVideo(e.target.value)}/>
                        </label><p />

                        <div className='mt-5 bg-slate-100 p-3'>
                            Choose image:<br/>
                            <label htmlFor='img'>
                                <input type='file' accept='image/*' onChange={(e) => setPicture(e)} id='img' className='hidden'/>

                                <div className='mt-2 p-3 hover:cursor-pointer w-full'>
                                    <FaFileImage className='text-2xl hover:text-blue-700'/>
                                </div>

                                {image && <div className='mt-2 w-[200px] h-[200px]'>
                                    <Image src={image} height={1000} width={1000} className='w-full h-full object-cover' alt='img'/>
                                </div>}
                            </label>
                        </div>
                        
                        <div className='mt-5 flex justify-center w-full'>
                                <button className='p-5 bg-slate-600 rounded-md w-[70%] text-gray-200 font-quicksand font-semibold hover:bg-slate-500'>
                                    {loading ? 'Creating' : 'Create Post'}
                                </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}