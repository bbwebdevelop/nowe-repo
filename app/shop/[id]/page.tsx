"use client";

import { useEffect, useState } from "react";
import { products, Product } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";


interface Props {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: Props) {
  const [productId, setProductId] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0); 

  useEffect(() => {
    (async () => {
      const resolvedParams = await params;
      setProductId(resolvedParams.id);
    })();
  }, [params]);

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find((p) => p.id === productId) || null;
      setProduct(foundProduct);
      setSelectedImage(foundProduct?.images[0] || null); 

      if (!foundProduct) {
        notFound();
      }
    }
  }, [productId]);


  useEffect(() => {
    if (product) {
      setTotalPrice((product.price / 100) * quantity);
    }
  }, [product, quantity]);

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, quantity }),
      });

      const data = await response.json();

      if (response.ok && data.url) {
        window.location.href = data.url;
      } else {
        console.error("Error:", data.error);
        alert("Error: " + (data.error || "Unable to initiate checkout."));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error: Unable to initiate checkout.");
    }
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <Header />
      <div className="py-7 flex gap-4 items-center">
  <Link href="/shop">
    <Image
      src="/icons/leftarrow.svg"
      alt="left-arrow"
      width={20}
      height={20}
      className="cursor-pointer"
    />
  </Link>
  <Link href="/shop">
    <p className="cursor-pointer text-black/60 hover:text-black transition-duration-200">BACK</p>
  </Link>
</div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 py-10">
        
        {/* Miniaturki zdjęć */}
      <div className="space-y-4">
  {product.images.map((image, index) => (
    <div
      key={index}
      className={`border rounded-lg p-1 cursor-pointer ${
        selectedImage === image ? "border-black/70" : "border-gray-300"
      }`}
      onClick={() => setSelectedImage(image)}
    >
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={`${product.name} - Image ${index + 1}`}
          fill
          className="rounded-lg object-cover" 
        />
      </div>
    </div>
  ))}
</div>


      {/* Główne zdjęcie */}
      <div className="relative w-full h-[500px]">
        {selectedImage && (
          <Image
            src={selectedImage}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        )}
      </div>

      {/* Szczegóły produktu */}
      <div>
        <h4 className="text-3xl font-medium mb-6">{product.name}</h4>
        <p className="text-black/60 mb-6">{product.fullDescription}</p>
        <p className="text-md mb-3 text-black/70">One Item: ${(product.price / 100).toFixed(2)}</p>

        {/* Dynamiczna aktualizacja całkowitej ceny */}
        <p className="text-md mb-6 text-black/70">
          Total Price: ${totalPrice.toFixed(2)}
        </p>

        {/* Wybór ilości */}
        <div className="flex items-center mb-6">
          <button
            onClick={decreaseQuantity}
            className="px-4 py-2 bg-gray-200 rounded-l hover:bg-gray-300"
          >
            -
          </button>
          <span className="px-6 py-2 border-t border-b">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-4 py-2 bg-gray-200 rounded-r hover:bg-gray-300"
          >
            +
          </button>
        </div>

        {/* Przycisk Kup Teraz */}
        <button
          onClick={handleCheckout}
          className="bg-[#000] px-4 py-1 lg:py-2 mr-2 lg:mr-0 hover:bg-[#2a2626] transition duration-300 rounded-full text-white"
        >
          Buy Now
        </button>
      </div>
      </div>
      <Footer />
    </div>
  );
}
