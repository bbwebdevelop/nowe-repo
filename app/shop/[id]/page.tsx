'use client';

import { useEffect, useState } from "react";
import { products, Product } from "@/app/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: Props) {
  const [productId, setProductId] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);

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

      if (!foundProduct) {
        notFound();
      }
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
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

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">{product.name}</h1>
      <div className="relative w-full h-64 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <p className="mt-2 text-gray-600">{product.description}</p>
      <p className="mt-4 font-bold">${(product.price / 100).toFixed(2)}</p>

      <button
        onClick={handleCheckout}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Buy Now
      </button>
    </div>
  );
}
