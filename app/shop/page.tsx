'use client';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Shop/Hero";


export default function ShopPage() {
  return (
    <div className="max-w-screen-lg mx-auto py-8">
        <Header />
        <Hero />
        <Footer />
       
    </div>
  );
}
