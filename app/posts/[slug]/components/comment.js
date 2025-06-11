'use client';
import { useEffect } from 'react';

export default function CusdisComments({ post }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cusdis.com/js/cusdis.es.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-10 lg:h-[50vh] w-full">
      <h2 className="text-2xl font-bold mb-4 font-quicksand">Comments</h2>
      <div
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="fe796ed6-8108-4ce6-8189-aef35fedf6d9" 
        data-page-id={post.slug}
        data-page-url={`daveblog-three.vercel.app/posts/${post.slug}`}
        data-page-title={post.title}
      ></div>
    </div>
  );
}


// BtxG3EEJA4ueRAN8