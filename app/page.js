'use client';

import './globals.css';
import Preview from './components/postPreview';
import Link from 'next/link';
import Quote from './components/quote';

import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {

  const [posts,setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
      const getPosts = async() => {
        try{
            const res = await fetch('/api/get-posts');

            if(!res.ok){
              alert('Could not retrieve');
            }

            const data = await res.json();
            console.log(data);
            setPosts(data);
      
        } catch(err){
            console.log(err.message);
        }
      } 

      getPosts();
  },[]);
  
  return (
    <>
        <div className='lg:w-[90%] h-fit custom-scrollbar-hidden m-auto lg:mt-10 '>
          <div className='grid lg:grid-cols-[70%_30%] grid-cols-1 lg:h-[70vh] lg:w-fullm-auto '>

            <div className='w-full lg:h-full h-[50vh] bg-black' onClick={() => router.push(`/posts/${posts[0]._id}`)}>
              {posts[0] && 
                <Preview width='w-full h-full' post={posts[0]} />
              }
            </div>

            <div className='w-full h-full p-5 lg:flex hidden justify-center'>
              <div>
                <div className='w-fit text-xl font-quicksand font-bold'>
                  More Posts
                </div>

                {posts ? <div className='mt-3 underline font-sans'>
                  {posts?.slice(1,10).map((p,index) => (
                    <div className='hover:text-blue-700 mt-2' key={index}>
                    <Link href={`/posts/${p._id}`}>{p.title}</Link>
                  </div>
                  ))}

                </div> : (
                  <>
                    No Posts Yet
                  </>
                )}
              </div>
            </div>
          </div>


          <div className='w-full mt-10'>
            <div className='lg:text-2xl font-semibold capitalize font-quicksand p-5 text-lg'>Other Posts</div>

            <div className='grid lg:grid-cols-3 lg:w-full w-[90%] grid-cols-1 lg:h-[100vh] h-[200vh] m-auto mt-10 mb-[100px] gap-10'>
            
              {posts.slice(1).map((p,index) => (
                  <div className='w-full h-full' key={index} onClick={() => router.push(`/posts/${p._id}`)}>
                    <Preview width='w-full' height='h-full' post={p} />
                  </div>
              ))}

            </div>

            <div className='flex w-full justify-center'>
                <Link href='/list'><button className='p-4 bg-slate-900 text-white font-quicksand'>See More</button></Link>
            </div>
          </div>


          <div className='lg:w-full w-[90%] m-auto lg:h-[40vh] h-[20vh] mb-[100px] mt-10'>
            <Quote width='w-full' height='h-full'/>
          </div>

          
        </div>
    </>
  )
}
