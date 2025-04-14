"use client";

import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { calculateBulkPrice } from "../../utils/bulkPricing";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce((sum, product) => {
    const { total } = calculateBulkPrice(product, product.quantity);
    return sum + total;
  }, 0);

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-6">
              {cart.map((product) => {
                const { unitPrice, total, discountMessage, appliedDiscount } = calculateBulkPrice(
                  product,
                  product.quantity
                );

                return (
                  <li key={product.id} className="flex gap-4 items-center border-b pb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-md border"
                    />
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                      <p className="text-sm text-gray-600">${unitPrice.toFixed(2)} x {product.quantity}</p>
                      <p className="text-gray-800 font-medium mt-1">Subtotal: ${total.toFixed(2)}</p>
                      {appliedDiscount > 0 && (
                        <p className="text-green-600 text-sm font-medium">{discountMessage}</p>
                      )}
                      {/* Cantidad */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 transition"
                          onClick={() => updateQuantity(product.id, product.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="font-semibold">{product.quantity}</span>
                        <button
                          className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 transition"
                          onClick={() => updateQuantity(product.id, product.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      className="bg-red-500 text-white px-3 py-2 rounded-md text-sm hover:bg-red-600 transition ml-4"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Totales */}
            <div className="mt-8 border-t pt-6 text-right">
              <h2 className="text-2xl font-bold text-gray-900">Total: ${totalPrice.toFixed(2)}</h2>
              <Link href="/checkout">
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                  Proceed to Checkout
                </button>
              </Link>
            </div>

            <div className="mt-6 text-center">
              <Link href="/store">
                <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-300 transition">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
