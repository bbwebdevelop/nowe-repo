import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="max-w-screen px-4 mx-auto py-8 bg-black">
     
      <div className="bg-black rounded-xl flex flex-col sm:flex-row gap-3 p-4 text-center sm:text-left items-center sm:px-3 sm:py-1">
        <h3 className="text-white text-xs md:text-lg">NEWS TICKER+++</h3>
        <p className="text-xs md:text-base">
          Lorem, ipsum dolor sU DAJ NAWIGACJE
        </p>
      </div>

    
      <div className="flex justify-center lg:text-center">
        <h4 className="text-white py-8 text-2xl lg:text-7xl text-center">
          760 N LA CIENEGA
          <br /> LOS ANGELES
        </h4>
      </div>

    
      <div className="grid grid-cols-3 gap-8 text-white text-sm py-8 px-4">
      
        <div className="flex flex-col items-start justify-center">
          <h2 className="font-semibold mb-2 tracking-tight">SALLY HERSHBERGER</h2>
          <p className="text-gray-500 text-xs">
            &#169; copyright 2024 Sally Hershberger. <br /> All rights reserved
          </p>
        </div>

       
        <div className="flex flex-col items-start justify-center">
          <h2 className="font-semibold mb-2">Support</h2>
          <Link href="/about">
            <h4>About</h4>
          </Link>
          
          <Link href="/booking">
            <h4>Booking</h4>
          </Link>
          <Link href="/shop">
            <h4>Shop</h4>
          </Link>
        </div>

       
        <div className="flex flex-col items-start justify-center">
          <h2 className="font-semibold mb-2">Follow Us</h2>
          <ul className="flex space-x-4">
            <Image src={'/icons/social6.svg'} width={20} height={20} alt="Twitter" className="cursor-pointer"/>
            <Image src={'/icons/social8.svg'} width={20} height={20} alt="RSS" className="cursor-pointer"/>
          </ul>
        </div>
      </div>
      <div className="flex justify-end items-center space-x-1">
  <p className="text-white/60 text-sm tracking-tighter ">crafted by</p>
  <p className="text-white text-sm tracking-tighter ">finsky</p>
</div>

    </div>
  );
};
