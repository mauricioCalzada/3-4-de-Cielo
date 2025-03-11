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
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            {/* Make the image clickable */}
            <Link href={`/product/${product.id}`} className="block">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover cursor-pointer"
              />
            </Link>

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</p>
              <button
                className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-md font-medium transition-all hover:bg-green-700 hover:shadow-md"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <Link href={`/product/${product.id}`} className="block mt-2 text-center text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
