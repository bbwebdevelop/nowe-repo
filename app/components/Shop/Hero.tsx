"use client";

import React from "react";
import Image from "next/image";
import { products, Product } from "@/app/data/products";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-8 py-12">Hershberger Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product: Product) => (
          <div key={product.id} className="border border-gray-100 rounded-lg p-2">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={product.images[0]} 
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <h4 className="text-xl text-center mb-4">{product.name}</h4>
            <h4 className="text-lg text-center mb-4">{product.size}</h4>
            <p className="mt-2 text-black/60 text-center">{product.shortDescription}</p>
            <p className="mt-4 text-center">${(product.price / 100).toFixed(2)}</p>
            <div className="flex justify-center mt-4">
            <Link
              href={`/shop/${product.id}`}
              className="bg-[#adadad3b] px-4 py-2 hover:bg-[#adadad86] transition duration-200 rounded-full text-black/40 hover:text-black/70"
            >
              View Product
            </Link>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};
