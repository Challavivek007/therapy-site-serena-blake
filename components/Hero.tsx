'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center pt-20">
      {/* 🔲 Navbar - Black background */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 shadow-md z-50">
  <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <h1 className="text-xl text-white font-bold">Dr. Serena Blake</h1>
    <div className="space-x-6 hidden md:flex">
      <a href="#about" className="text-blue-600 hover:text-white font-semibold">
        About
      </a>
      <a href="#services" className="text-blue-600 hover:text-white font-semibold">
        Services
      </a>
      <a href="#faq" className="text-blue-600 hover:text-white font-semibold">
        FAQ
      </a>
      <a href="#contact" className="text-blue-600 hover:text-white font-semibold">
        Contact
      </a>
    </div>
  </div>
</nav>


      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Therapy background"
        fill
        priority
        className="object-cover brightness-[0.6]"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          Begin Your Journey Toward Healing & Growth
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl">
          Personalized, compassionate therapy with Dr. Serena Blake, PsyD in Los Angeles or online.
        </p>

        <Link
  href="#contact"
  className="mt-8 inline-block bg-emerald-400 hover:bg-emerald-500 text-white font-semibold py-3 px-6 rounded-full transition"
>
  Book a Free Consult
</Link>



      </div>
    </section>
  );
}
