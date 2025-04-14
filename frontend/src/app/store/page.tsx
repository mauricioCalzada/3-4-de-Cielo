"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import productsData from "../data/products.json";
import { useCart } from "../../context/CartContext";

export default function StorePage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen p-6 md:p-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Store</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 overflow-hidden"
        >
          <Link href={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-[4/3] object-cover"
            />
          </Link>
        
          <div className="p-4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-blue-600 text-sm font-bold">${product.basePrice.toFixed(2)}</p>
        
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-green-500 hover:bg-green-600 text-white text-sm tracking-wide font-medium py-2 rounded-md transition"
            >
              Add to Cart
            </button>
        
            <Link
              href={`/product/${product.id}`}
              className="text-center text-sm text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>
        
        ))}
      </div>
    </main>
  );
}
