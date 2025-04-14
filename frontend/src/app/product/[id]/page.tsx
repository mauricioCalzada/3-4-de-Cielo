"use client";

import { useParams } from "next/navigation";
import productsData from "../../data/products.json";
import Link from "next/link";
import { useCart } from "../../../context/CartContext";
import { calculateBulkPrice } from "../../../utils/bulkPricing";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productsData.find((p) => p.id === parseInt(id as string));

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <h1 className="text-2xl font-semibold text-red-500">Product not found</h1>
      </main>
    );
  }

  const { unitPrice, appliedDiscount, discountMessage } = calculateBulkPrice(product, 1);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10">
        
        {/* Imagen */}
        <div className="w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
          />
        </div>

        {/* Detalles */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <p className="text-2xl font-bold text-blue-600">
              ${unitPrice.toFixed(2)}
              {appliedDiscount > 0 && (
                <span className="ml-2 text-sm text-green-600 font-medium">
                  ({discountMessage})
                </span>
              )}
            </p>
          </div>

          {/* Botones */}
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => addToCart({ ...product, quantity: 1 })}
              className="bg-green-500 text-white py-3 rounded-md font-semibold text-sm hover:bg-green-600 transition"
            >
              Add to Cart
            </button>

            <Link href="/store">
              <button className="bg-gray-100 text-gray-800 py-3 rounded-md font-medium text-sm hover:bg-gray-200 transition">
                Back to Store
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
