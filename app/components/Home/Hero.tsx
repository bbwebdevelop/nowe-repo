"use client";
import Image from "next/image";
import { services } from "@/app/data/services";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-8">
      
      <div className="p-2 lg:p-0">
        <Image src="/hero.jpg" width={1280} height={720} alt="hero" />
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 py-6 px-2 lg:px-0 lg:py-36">
        <div className="py-8">
          <Image
            src="/hero2.jpg"
            width={500}
            height={500}
            alt="hero"
            className="grayscale"
          />
        </div>
        <div>
          <h2 className="text-4xl tracking-tighter py-10 mb-10 text-center lg:text-start">
            &quot;A woman who cuts her hair is about to change her life.&quot;{" "}
            <span className="px-2">-</span>
            <span className="px-2">Sally Hershberger</span>
          </h2>

          <p className="px-2 mb-6 lg:px-0 lg:mb-0 max-w-[90%]">
            Sally Hershberger, a trendsetting stylist, is one of the world’s
            most sought-after hairdressers. She rose to fame at 18, styling rock
            stars and supermodels, and her celebrity clientele solidified her
            icon status. In 2015, she launched the Sally Hershberger 24K
            Collection, a luxury haircare line infused with 24K Gold Elixir for
            effortless, glamorous styles. Sally splits her time between her
            salons in New York and Los Angeles, bringing her artistry to clients
            worldwide.
          </p>
        </div>
      </div>

     
      <div
        style={{
          backgroundImage: `url('/hero-image.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          width: "100%",
          height: "400px",
        }}
      >
        <div className="h-full flex flex-col justify-end p-8">
          <div className="bg-[#070f12] bg-opacity-70 text-white p-6 w-[40%] text-center hidden lg:block">
            <h1 className="text-4xl font-bold">The Signature of Style</h1>
            <p className="mt-4 text-white/60">
              Sought after by celebrities and trendsetters alike,{" "}
              <span className="text-white">Sally Hershberger</span> crafts
              timeless looks that exude elegance and individuality. With an
              unparalleled eye for detail, she transforms hair into a canvas of
              beauty, redefining style for every client who steps into her
              world.
            </p>
          </div>
        </div>
      </div>

      
      <div className="flex py-12 mx-auto justify-between items-center">
        <div>
          <h4 className="text-4xl lg:text-7xl py-12 tracking-tighter text-black/70">THE ART OF HAIR</h4>
        </div>
        <button className="bg-[#000] px-4 py-1 lg:py-2 mr-2 lg:mr-0 hover:bg-[#2a2626] transition duration-300 rounded-full text-white">
          <Link href="/booking" className="block w-full h-full">
            <h4 className="text-lg font-normal">View</h4>
          </Link>
        </button>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto py-12 gap-2">
        
        <div className="flex flex-col gap-2">
        
          <div
            style={{
              backgroundImage: `url('/grid1.png')`,
              backgroundSize: "cover",
              width: "100%",
              height: "550px",
            }}
            className="grayscale flex flex-col justify-end p-4"
          >
            <div className="text-center text-white">
              <h1 className="text-2xl font-bold mb-4">Precision Haircut</h1>
              <button
                onClick={() =>
                  window.open(services[0]?.calendlyLink || "#", "_blank")
                }
                className="bg-[#ffffff50] px-4 py-2 hover:bg-[#ffffff] transition duration-300 rounded-lg text-white hover:text-black"
              >
                <h4>Book</h4>
              </button>
            </div>
          </div>

          
          <div
            style={{
              backgroundImage: `url('/grid2.png')`,
              backgroundSize: "cover",
              width: "100%",
              height: "550px",
            }}
            className="grayscale flex flex-col justify-end p-4"
          >
            <div className="text-center text-white">
              <h1 className="text-2xl font-bold mb-4">
                Signature Hair Coloring
              </h1>
              <button
                onClick={() =>
                  window.open(services[1]?.calendlyLink || "#", "_blank")
                }
                className="bg-[#ffffff50] px-4 py-2 hover:bg-[#ffffff] transition duration-300 rounded-lg text-white hover:text-black"
              >
                <h4>Book</h4>
              </button>
            </div>
          </div>
        </div>

       
        <div className="flex items-center h-full">
          <div
            style={{
              backgroundImage: `url('/grid3.jpg')`,
              backgroundSize: "cover",
              width: "100%",
              height: "550px",
            }}
            className="grayscale flex flex-col justify-end p-4"
          >
            <div className="text-center text-white">
              <h1 className="text-2xl font-bold mb-4">Hair Luxury</h1>
              <button
                onClick={() =>
                  window.open(services[2]?.calendlyLink || "#", "_blank")
                }
                className="bg-[#ffffff50] px-4 py-2 hover:bg-[#ffffff] transition duration-300 rounded-lg text-white hover:text-black"
              >
                <h4>Book</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
