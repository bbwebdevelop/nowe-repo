'use client';

import { Header } from "../components/Header"; 
import { Hero } from "../components/Booking/Hero"; 
import { Footer } from "../components/Footer";

export default function BookingPage() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
