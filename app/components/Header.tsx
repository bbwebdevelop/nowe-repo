"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import hamburgericon from "../../public/icons/hamburgericon.svg";
import social1 from "../../public/icons/social1.svg";
import social2 from "../../public/icons/social2.svg";
import line from "../../public/icons/line.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-screen-lg mx-auto my-3 ">
      <div className="flex px-2 py-2 items-center justify-between border-b border-black-900">
        <div className="flex items-center gap-2">
          <h1 className="">
            <Link href="/">Sally Hershberger</Link>
          </h1>
        </div>

        <div className="hidden lg:flex flex-1 justify-center space-x-8 z-10">
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

        <div className="hidden lg:flex items-center gap-4 cursor-pointer z-10">
          <Image src={line} alt="menu" />
          <Image src={social1} alt="menu" />
          <Image src={social2} alt="menu" />
        </div>

        <div className="block lg:hidden" onClick={toggleMenu}>
          <Image
            src={hamburgericon}
            width={40}
            height={40}
            alt="menu"
            style={{
              background: "#CAFF33",
              padding: "10px",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-transparent backdrop-blur-md py-2 px-4 ">
          <Link href="/">
            <h4>Home</h4>
          </Link>
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
      )}
    </div>
  );
};
