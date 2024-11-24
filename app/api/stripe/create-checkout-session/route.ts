import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/app/data/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-10-28.acacia",
});

export async function POST(req: Request) {
  const { productId, quantity } = await req.json(); 

  
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  try {
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], 
      line_items: [
        {
          price_data: {
            currency: "usd", 
            product_data: {
              name: product.name, 
              description: product.shortDescription, 
              images: [
                `${process.env.NEXT_PUBLIC_BASE_URL}${product.images[0]}`,
              ],
            },
            unit_amount: product.price, 
          },
          quantity: quantity || 1, 
        },
      ],
      mode: "payment", 
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/success`, 
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop`, 
    });

    return NextResponse.json({ url: session.url }); 
  } catch (error) {
    console.error("Stripe Error:", error); 
    return NextResponse.json({ error: "Stripe checkout failed" }, { status: 500 });
  }
}
