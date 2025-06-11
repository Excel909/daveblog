'use client';
import '@/app/globals.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [img] = useState('https://images.unsplash.com/photo-1728443139578-cdfbf43e1a72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8');

  const router = useRouter();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch('/api/get-all-posts');
        if (!res.ok) {
          alert('Could not retrieve');
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='container m-auto p-5 h-fit min-h-screen'>
        <div className='w-full font-bold text-2xl font-quicksand'>All Posts</div>

        {/* Search Bar */}
        <div className='mt-4 mb-6'>
          <input
            type='text'
            placeholder='Search posts by title...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='w-full p-5 bg-slate-50'>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((p, index) => (
              <div
                className='grid grid-cols-[30%_70%] lg:w-[50vh] h-[100px] border-2 bg-slate-100 rounded-md p-2 mt-3 hover:cursor-pointer'
                key={index} onClick={() => router.push(`/posts/${p._id}`)}
              >
                <div className='w-full h-full overflow-hidden'>
                  <Image
                    src={p.postPic || img}
                    alt='pic'
                    width={1000}
                    height={1000}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='w-full h-full flex pl-2 items-center'>{p?.title}</div>
              </div>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </div>
    </>
  );
}