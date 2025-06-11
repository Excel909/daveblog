'use client';
import style from '../styles/preview.module.css';
import '../globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/functions/dateFormatter';

export default function Preview({width=`w-[50vw]`, height='h-[50vh]',  link='/',  post=[]}) {


    const header = 'Imagine being a developer in this Age';
    const category= 'Category'; 
    const img='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D';

    return(
        <>
                <div className={`${width} ${height} bg-red-200 relative ${style.prevImg} hover:cursor-pointer overflow-hidden rounded-md`}>
                <div className={`w-full absolute h-full bg-blue-100 overflow-hidden`}>
                    <Image src={post.postPic || img} alt='blog pic' height={1000} width={1000} className='w-full h-full object-cover'/>
                </div>

                <div className={`${style.text} w-full h-full relative top-0 left-0`}>
                    <div className={`w-[90%] p-5 absolute bottom-0 ml-[5%] h-fit flex justify-center items-center ${style.texter} rounded-tl-md rounded-tr-md`}>
                        <div>
                            <div className='p-2 text-center bg-slate-800 rounded-sm text-gray-50 font-quicksand font-semibold w-fit m-auto'>
                                {post.category || category}
                            </div>

                            <div className='lg:text-xl text-gray-200 mt-2 font-inter font-semibold'>
                                {post.title || header}
                            </div>

                            <div className='m-auto w-fit h-fit mt-2 text-gray-500'>
                                {formatDate(post.createdAt) ||'September 9th'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}