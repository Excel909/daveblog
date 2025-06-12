import {Quicksand} from 'next/font/google';
import { Raleway } from 'next/font/google';
import { Inter } from 'next/font/google';
import Nav from './components/nav';
import Image from 'next/image';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export const metadata = {
  title: "GreatDave",
  description: "A blog website",
};

const quicksand = Quicksand({
  subsets: ['latin'],
  weight:['300','400','500','600'],
  variable:'--font-quicksand'
});

const raleway = Raleway({
  subsets:['latin'],
  weight:['100','200','300','400','500'],
  variable:'--font-raleway'
});

const inter = Inter({
  subsets:['latin'],
  weight:['100','200','300','400','500'],
  variable:'--font-inter'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${quicksand.variable} ${raleway.variable} ${inter.variable}`}
      >
        <div className='w-full h-fit'>
            <div className='h-fit w-full sticky top-0 left-0 z-40 '>
              <Nav />
            </div>

            <div>
              {children}
            </div>

            <div className='w-full lg:h-[45vh] bg-gray-100 grid lg:grid-cols-[60%_20%_20%] h-fit'>
            <div className='w-full h-full p-10'>
              <div className='w-[100px] h-[100px]'>
                <Image src='/android-chrome-192x192.png' width={1000} height={1000} alt='logo' className='w-full h-full object-cover' />
              </div>

              <div className='mt-5'>
                <ul className='leading-loose'>
                  <li className='flex justify-center items-center w-fit gap-3 font-quicksand font-semibold'><span className='text-slate-500 text-xl'><FaPhoneSquareAlt /></span> +2349020921692</li>

                  <li className='flex justify-center items-center w-fit gap-3 font-quicksand font-semibold'><span className='text-slate-500 text-xl'><MdEmail /></span> greatdave@gmail.com</li>

                  <li className='flex justify-center items-center w-fit gap-3 font-quicksand font-semibold'><span className='text-slate-500 text-xl'><FaYoutube /></span> @Greatdaveafricainsight</li>

                  <li className='flex justify-center items-center w-fit gap-3 font-quicksand font-semibold'><span className='text-slate-500 text-xl'><FaFacebook /></span> @GreatDaveAfricaInsight</li>
                </ul>
              </div>
            </div>

            <div className='w-full h-full '>

            </div>

            <div className='w-full h-full '>

            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
