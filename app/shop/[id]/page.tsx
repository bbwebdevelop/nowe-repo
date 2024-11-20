"use client";

import { products, Product } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";

export default function ProductPage({ params: promise }: { params: Promise<{ id: string }> }) {
  const params = use(promise); // Odpakowanie params (Promise)

  const product = products.find((item: Product) => item.id === params.id);

  if (!product) {
    notFound();
  }

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Przekierowanie do Stripe Checkout
      } else {
        alert("Failed to create checkout session.");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      {/* Zdjęcie produktu */}
      <div className="relative w-full h-96 mb-8">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>

      {/* Szczegóły produktu */}
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="mt-4 text-gray-600">{product.description}</p>
      <p className="mt-6 text-2xl font-bold">
        Price: ${(product.price / 100).toFixed(2)}
      </p>

      {/* Przycisk "Buy Now" */}
      <button
        onClick={handleCheckout}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Buy Now
      </button>
    </div>
  );
}
