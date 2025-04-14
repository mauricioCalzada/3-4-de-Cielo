"use client";

import { Carousel } from "react-responsive-carousel";

export default function HomePage() {
  const slides = [
    { src: "/images/laptop.jpg", alt: "Gaming Laptop" },
    { src: "/images/headphones.jpg", alt: "Wireless Headphones" },
    { src: "/images/smartphone.jpg", alt: "Smartphone Ultra X" },
    { src: "/images/smartwatch.jpg", alt: "Smart Watch Pro" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Bienvenido a Tres Cuartos de Cielo
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Encuentra productos únicos con descuentos por volumen. Haz tu pedido en línea y nosotros te contactamos personalmente.
        </p>

        <a
          href="/store"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Entrar a la tienda
        </a>
      </div>

      <div className="mt-12 w-full max-w-4xl">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={4000}
          transitionTime={800}
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.src} alt={slide.alt} className="rounded-xl object-cover h-96" />
            </div>
          ))}
        </Carousel>
      </div>
    </main>
  );
}
