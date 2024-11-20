'use client';
import Link from "next/link";
import Image from "next/image";
import { products, Product } from "@/app/data/products";


export default function ShopPage() {
  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Shop Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product: Product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <p className="mt-4 font-bold">${(product.price / 100).toFixed(2)}</p>
            <Link
              href={`/shop/${product.id}`}
              className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
