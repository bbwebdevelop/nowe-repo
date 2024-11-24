"use client";
import { services } from "@/app/data/services";
import React from "react";

export const Hero = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <h4 className="py-12 mb-6 text-5xl font-medium tracking-tight text-black/80 items-center text-center">
        CHANGE YOUR LOOK
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-1">
       
        <div className="flex flex-col space-y-6">
          <h4 className="text-4xl font-medium tracking-tight text-black/60 text-center mb-6">
            Sally Hershberger
          </h4>
          <div className=" lg:flex  space-x-1">
            
            <div className="  border border-gray-100 rounded-lg p-2 flex flex-col items-center text-center">
              <img
                src={services[0]?.image || "/placeholder.jpg"}
                alt={services[0]?.name || "Placeholder"}
                className="w-full h-80 object-cover rounded-md mb-4 grayscale"
              />
              <h2 className="text-xl font-bold mb-2 text-black service-title ">
                {services[0]?.name || "Placeholder"}
              </h2>
              <div className="flex gap-8 text-center justify-center items-center">
              <button
                onClick={() => window.open(services[0]?.calendlyLink || "#", "_blank")}
                className="bg-[#adadad3b] px-4 py-2 hover:bg-[#adadad86] transition duration-200 rounded-full text-black/40 hover:text-black/70"
              >
                Book
              </button>
              <h4 className=" ">{services[0]?.price}</h4>
              </div>
              
              
            </div>

            
            <div className="  border border-gray-100 rounded-lg p-2 flex flex-col items-center text-center lg:mt-20">
              <img
                src={services[1]?.image || "/placeholder.jpg"}
                alt={services[1]?.name || "Placeholder"}
                className="w-full h-80 object-cover rounded-md mb-4 grayscale"
              />
              <h2 className="text-xl font-bold mb-2 text-black service-title ">
                {services[1]?.name || "Placeholder"}
              </h2>
              <div className="flex gap-8 text-center justify-center items-center">
              <button
                onClick={() => window.open(services[0]?.calendlyLink || "#", "_blank")}
                className="bg-[#adadad3b] px-4 py-2 hover:bg-[#adadad86] transition duration-200 rounded-full text-black/40 hover:text-black/70"
              >
                Book
              </button>
              <h4 className=" ">{services[1]?.price}</h4>
              </div>
            </div>
          </div>
        </div>

       
        <div className=" rounded-lg p-6 lg:mt-60">
          <h4 className="text-2xl font-medium text-black/70 mb-4 text-center">
            iconic
          </h4>
          <p className="text-black text-center">
          Top-tier hairdressing combines precision, creativity, and a deep understanding of individual needs. World-class stylists transform hair into art, using advanced techniques and premium products to enhance every client’s beauty and confidence.
          </p>
          <hr className="my-4 " />
          <p className="text-center">With a focus on detail and innovation, these professionals deliver exceptional results. From consultations to final touches, their expertise ensures luxury, elegance, and unmatched satisfaction.</p>
        </div>
       
      </div>
      <div className="">
      
       
       <div className="  border border-gray-100 rounded-lg p-2 lg:max-w-[73%] lg:-mt-20 text-center mb-8">
              <img
                src={services[2]?.image || "/placeholder.jpg"}
                alt={services[2]?.name || "Placeholder"}
                className="w-full h-80 object-cover rounded-md mb-4 grayscale"
              />
              <h2 className="text-xl font-bold mb-2 text-black service-title ">
                {services[2]?.name || "Placeholder"}
              </h2>
              <div className="flex gap-8 text-center justify-center items-center">
              <button
                onClick={() => window.open(services[0]?.calendlyLink || "#", "_blank")}
                className="bg-[#adadad3b] px-4 py-2 hover:bg-[#adadad86] transition duration-200 rounded-full text-black/40 hover:text-black/70"
              >
                Book
              </button>
              <h4 className=" ">{services[2]?.price}</h4>
              </div>
            </div>
        </div>
        <h4 className="py-16 mb-6 text-5xl font-medium tracking-tight text-black/80 items-center text-center">
        WORLD-RENOWNED HAIR ARTISTRY
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="text-center items-center justify-center">
            <p>At the pinnacle of hair artistry, attention to detail is paramount. From personalized consultations to the final touch, top-tier stylists ensure an unparalleled experience, exuding professionalism and expertise at every step. Their dedication to continuous learning and staying ahead of industry trends guarantees access to the latest innovations. Whether crafting a timeless look or a bold transformation, these experts redefine luxury haircare, providing clients with confidence and elegance that resonates long after they leave the chair.</p>
            <hr className="my-4"/>
            <span className="text-2xl tracking-tight text-black/65">With decades of unmatched experience, she sets the standard in luxury haircare.</span>
        </div>
        <div>
           
            <div className=" border border-gray-100 rounded-lg p-2 flex flex-col items-center text-center">
              <img
                src={services[3]?.image || "/placeholder.jpg"}
                alt={services[3]?.name || "Placeholder"}
                className="w-full h-80 object-cover rounded-md mb-4  grayscale"
              />
              <h2 className="text-xl font-bold mb-2 text-black service-title ">
                {services[3]?.name || "Placeholder"}
              </h2>
              <div className="flex gap-8 text-center justify-center items-center">
              <button
                onClick={() => window.open(services[0]?.calendlyLink || "#", "_blank")}
                className="bg-[#adadad3b] px-4 py-2 hover:bg-[#adadad86] transition duration-200 rounded-full text-black/40 hover:text-black/70"
              >
                Book
              </button>
              <h4 className=" ">{services[3]?.price}</h4>
              </div>
            </div>
        </div>
        
      </div>
      <h4 className="py-12 mb-6 text-5xl font-medium tracking-tight text-black/80 items-center text-center">
        CHANGE YOUR LOOK
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
        
        <div className=" border border-gray-100 rounded-lg p-2 flex flex-col items-center text-center">
              <img
                src={services[4]?.image || "/placeholder.jpg"}
                alt={services[4]?.name || "Placeholder"}
                className="w-full h-80 object-cover rounded-md mb-4  grayscale"
              />
              <h2 className="text-xl font-bold mb-2 text-black service-title ">
                {services[4]?.name || "Placeholder"}
              </h2>
              <div className="flex gap-8 text-center justify-center items-center">
              <button
                onClick={() => window.open(services[0]?.calendlyLink || "#", "_blank")}
                className="bg-[#adadad3b] px-4 py-2 hover:bg-[#adadad86] transition duration-200 rounded-full text-black/40 hover:text-black/70"
              >
                Book
              </button>
              <h4 className=" ">{services[4]?.price}</h4>
              </div>
            </div>
           
            <div className=" border border-gray-100 rounded-lg p-2 flex flex-col items-center text-center">
              <img
                src={services[5]?.image || "/placeholder.jpg"}
                alt={services[5]?.name || "Placeholder"}
                className="w-full h-80 object-cover rounded-md mb-4 grayscale"
              />
              <h2 className="text-xl font-bold mb-2 text-black service-title ">
                {services[5]?.name || "Placeholder"}
              </h2>
              <div className="flex gap-8 text-center justify-center items-center">
              <button
                onClick={() => window.open(services[0]?.calendlyLink || "#", "_blank")}
                className="bg-[#adadad3b] px-4 py-2 hover:bg-[#adadad86] transition duration-200 rounded-full text-black/40 hover:text-black/70"
              >
                Book
              </button>
              <h4 className=" ">{services[5]?.price}</h4>
              </div>
            </div>
            
            <div className=" border border-gray-100 rounded-lg p-2 flex flex-col items-center text-center">
              <img
                src={services[6]?.image || "/placeholder.jpg"}
                alt={services[6]?.name || "Placeholder"}
                className="w-full h-80 object-cover rounded-md mb-4 grayscale"
              />
              <h2 className="text-xl font-bold mb-2 text-black service-title ">
                {services[6]?.name || "Placeholder"}
              </h2>
              <div className="flex gap-8 text-center justify-center items-center">
              <button
                onClick={() => window.open(services[0]?.calendlyLink || "#", "_blank")}
                className="bg-[#adadad3b] px-4 py-2 hover:bg-[#adadad86] transition duration-200 rounded-full text-black/40 hover:text-black/70"
              >
                Book
              </button>
              <h4 className=" ">{services[6]?.price}</h4>
              </div>
            </div>
      </div>
      <h4 className="py-12 mb-12 text-5xl font-medium tracking-tight text-black/80 items-center text-center">
      MASTERPIECES IN EVERY STRAND
      </h4>
      
       
      <div className="  border border-gray-100 rounded-lg p-2  lg:-mt-10 text-center">
              <img
                src={services[7]?.image || "/placeholder.jpg"}
                alt={services[7]?.name || "Placeholder"}
                className="w-full h-screen object-cover rounded-md mb-4 grayscale"
              />
              <h2 className="text-xl font-bold mb-2 text-black service-title ">
                {services[7]?.name || "Placeholder"}
              </h2>
              <div className="flex gap-8 text-center justify-center items-center">
              <button
                onClick={() => window.open(services[0]?.calendlyLink || "#", "_blank")}
                className="bg-[#adadad3b] px-4 py-2 hover:bg-[#adadad86] transition duration-200 rounded-full text-black/40 hover:text-black/70"
              >
                Book
              </button>
              <h4 className=" ">{services[7]?.price}</h4>
              </div>
            </div>
        </div>
       
    
  );
};
