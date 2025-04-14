"use client";

import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { calculateBulkPrice } from "../../utils/bulkPricing";

export default function CheckoutPage() {
  const { cart, saveOrder } = useCart();
  const router = useRouter();

  const totalPrice = cart.reduce((sum, product) => {
    const { total } = calculateBulkPrice(product, product.quantity);
    return sum + total;
  }, 0);

  const handleConfirmOrder = () => {
    // Guarda el pedido en el historial y limpia el carrito
    saveOrder();
    // Redirige al historial de pedidos (por ejemplo, /account)
    router.push("/account");
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Order Confirmation</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">
            Your cart is empty.{" "}
            <Link href="/store" className="text-blue-500 hover:underline">
              Go back to store
            </Link>
          </p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cart.map((product) => {
                const { unitPrice, total, appliedDiscount } = calculateBulkPrice(product, product.quantity);
                return (
                  <li key={product.id} className="py-4 flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                      <p className="text-sm text-gray-600">
                        {product.quantity} × ${unitPrice.toFixed(2)}
                        {appliedDiscount > 0 && (
                          <span className="ml-2 text-green-600 font-medium">
                            ({appliedDiscount * 100}% off)
                          </span>
                        )}
                      </p>
                    </div>
                    <p className="font-medium text-gray-900">${total.toFixed(2)}</p>
                  </li>
                );
              })}
            </ul>

            <div className="text-right mt-6 border-t pt-4">
              <p className="text-xl font-bold text-gray-900">Total: ${totalPrice.toFixed(2)}</p>
              <p className="text-green-600 mt-2">Thank you for your order! 🎉</p>
            </div>
          </>
        )}

        <div className="mt-8 flex flex-col gap-4 items-center">
          <button
            onClick={handleConfirmOrder}
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Confirm Order
          </button>
          <Link href="/store">
            <button className="bg-gray-600 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-700 transition">
              Back to Store
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
