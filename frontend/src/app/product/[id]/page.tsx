"use client";

import { useParams } from "next/navigation";
import productsData from "../../data/products.json";
import Link from "next/link";
import { useCart } from "../../../context/CartContext"; // Importa el contexto del carrito

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart(); // Usa la función addToCart del contexto

  const product = productsData.find((p) => p.id === parseInt(id as string));

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl text-red-500 font-bold">Product not found</h1>
        <Link href="/store">
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-all">
            Go Back to Store
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl w-full">
        <div className="grid md:grid-cols-2">
          {/* Product Image */}
          <div className="bg-gray-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-gray-700 text-lg mt-2">{product.description}</p>
              <p className="text-2xl font-bold text-blue-600 mt-4">${product.price.toFixed(2)}</p>
            </div>

            {/* Buttons */}
            <div className="mt-6">
            <button
            className="w-full bg-green-500 text-white px-6 py-3 rounded-md font-medium transition-all hover:bg-green-700 hover:shadow-md"
            onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              Add to Cart
              </button>
              <Link href="/store">
                <button className="mt-4 w-full bg-gray-500 text-white px-6 py-3 rounded-md font-medium transition-all hover:bg-gray-700">
                  Back to Store
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
