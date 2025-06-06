import './globals.css';
import Preview from './components/postPreview';
import Link from 'next/link';
import Quote from './components/quote';
import Image from 'next/image';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function Home() {
  
  return (
    <>
        <div className='lg:w-[90%] h-fit custom-scrollbar-hidden m-auto lg:mt-10 '>
          <div className='grid lg:grid-cols-[70%_30%] grid-cols-1 lg:h-[70vh] lg:w-fullm-auto '>

            <div className='w-full lg:h-full h-[50vh] bg-black'>
              <Preview width='w-full h-full'/>
            </div>

            <div className='w-full h-full p-3 lg:flex  hidden justify-center '>
              <div>
                <div className='w-fit text-xl font-quicksand font-bold'>
                  Trending Posts
                </div>

                <div className='mt-3 underline font-sans'>
                  <div className='hover:text-blue-700 mt-2'>
                    <Link href='/'>How to become a star in 2025</Link>
                  </div>

                  <div className='hover:text-blue-700 mt-2'>
                    <Link href='/'>The American Dream</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='w-full mt-10'>
            <div className='lg:text-2xl font-semibold capitalize font-quicksand p-5 text-lg'>Other Posts</div>

            <div className='grid lg:grid-cols-3 lg:w-full w-[90%] grid-cols-1 lg:h-[100vh] h-[200vh] m-auto mt-10 mb-[100px] gap-10'>
              <div className='w-full h-full'>
                <Preview width='w-full' height='h-full'/>
              </div>

              <div className='w-full h-full'>
                <Preview width='w-full' height='h-full'/>
              </div>

              <div className='w-full h-full'>
                <Preview width='w-full' height='h-full'/>
              </div>

              <div className='w-full h-full'>
                <Preview width='w-full' height='h-full'/>
              </div>

              <div className='w-full h-full'>
                <Preview width='w-full' height='h-full'/>
              </div>

              <div className='w-full h-full'>
                <Preview width='w-full' height='h-full'/>
              </div>
            </div>
          </div>


          <div className='lg:w-full w-[90%] m-auto lg:h-[40vh] h-[20vh] mb-[100px]'>
            <Quote width='w-full' height='h-full'/>
          </div>

          <div className='w-full lg:h-[45vh] bg-gray-100 grid lg:grid-cols-[60%_20%_20%] h-fit'>
            <div className='w-full h-full p-10'>
              <div className='w-[100px] h-[100px]'>
                <Image src='/android-chrome-192x192.png' width={1000} height={1000} alt='logo' className='w-full h-full object-cover' />
              </div>

              <div className='mt-5'>
                <ul className='leading-loose'>
                  <li className='flex justify-center items-center w-fit gap-3 font-quicksand font-semibold'><span className='text-slate-500 text-xl'><FaPhoneSquareAlt /></span> +2345678910654</li>

                  <li className='flex justify-center items-center w-fit gap-3 font-quicksand font-semibold'><span className='text-slate-500 text-xl'><MdEmail /></span> greatdave@gmail.com</li>

                  <li className='flex justify-center items-center w-fit gap-3 font-quicksand font-semibold'><span className='text-slate-500 text-xl'><FaYoutube /></span> youtube.com</li>

                  <li className='flex justify-center items-center w-fit gap-3 font-quicksand font-semibold'><span className='text-slate-500 text-xl'><FaFacebook /></span> facebook.com</li>
                </ul>
              </div>
            </div>

            <div className='w-full h-full '>

            </div>

            <div className='w-full h-full '>

            </div>
          </div>
        </div>
    </>
  )
}
