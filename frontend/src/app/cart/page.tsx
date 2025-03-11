"use client";

import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {cart.map((product) => (
            <div key={product.id} className="flex items-center border-b border-gray-200 py-4">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />

              {/* Product Information */}
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
                <p className="text-gray-800 font-medium">${product.price.toFixed(2)}</p>

                {/* Quantity Controls */}
                <div className="flex items-center mt-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md font-bold hover:bg-red-700 transition-all"
                    onClick={() => updateQuantity(product.id, product.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-4 text-xl font-semibold text-gray-900">{product.quantity}</span>
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-md font-bold hover:bg-green-700 transition-all"
                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md font-bold hover:bg-red-800 transition-all ml-4"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price Section */}
          <div className="mt-6 text-right border-t border-gray-300 pt-4">
            <h2 className="text-2xl font-bold text-gray-900">Total: ${totalPrice.toFixed(2)}</h2>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-all">
              Proceed to Checkout
            </button>
          </div>

          {/* Continue Shopping Button */}
          <div className="mt-6 text-center">
            <Link href="/store">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-all hover:bg-blue-800">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
