'use client';

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";

export default function Nav() {
  const [navShow, setNavShow] = useState(false);
  return (
    <div className="w-full relative">
        <div className="flex w-full h-[15vh] border-b-2 border-b-slate-200 justify-around items-center z-index sticky top-0 left-0 shadow-sm bg-white">
          <div className="lg:w-fit w-full flex lg:gap-[100px] h-fit lg:justify-center justify-around items-center">
            <div className="font-raleway font-semibold text-2xl cursor-default">
              Dave<span className="text-blue-700">blog</span>
            </div>

            <div className="gap-2 lg:flex justify-center items-center font-quicksand hidden">
                <Link href='/' className="w-fit p-3 font-semibold hover:text-blue-700">Home</Link>
                <Link href='/' className="w-fit p-3 font-semibold hover:text-blue-700">About</Link>
                <Link href='/' className="w-fit p-3 font-semibold hover:text-blue-700">Contact</Link>
                <Link href='/list' className="w-fit p-3 font-semibold hover:text-blue-700">Pages</Link>
            </div>

            <div className="p-5 text-2xl lg:hidden block" onClick={() => setNavShow(true)}>
                <RxHamburgerMenu />
            </div>
          </div>
          
          {/* socials */}
          <div className="text-2xl lg:flex justify-center items-center gap-3 hidden">
            <Link href='/'><FaFacebook /></Link>
            <Link href='/'><FaInstagram /></Link>
            <Link href='/'><IoLogoYoutube /></Link>
          </div>
        </div>

        {navShow && <div className="absolute top-0 left-0 bg-slate-800 w-full min-h-screen text-gray-50">
          <div className="p-5 text-2xl w-full" onClick={() => setNavShow(false)}>
              <GiCancel />
          </div>

          <ul className="w-full font-quicksand p-2 font-semibold text-lg">
            <li className="mt-2"><Link href='/' className="p-3 border-b-2 border-b-slate-600 block">Home</Link></li>
            <li className="mt-2"><Link href='/' className="p-3 border-b-2 border-b-slate-600 block">About</Link></li>
            <li className="mt-2"><Link href='/' className="p-3 border-b-2 border-b-slate-600 block">Contact Us</Link></li>
            <li className="mt-2"><Link href='/list' className="p-3 border-b-2 border-b-slate-600 block">Posts</Link></li>
          </ul>
          
          </div>}
    </div>
  )
}
