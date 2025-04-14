"use client";

import { useCart } from "../../context/CartContext";

export default function AccountPage() {
  const { orders } = useCart();

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Order History</h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-600">You have no orders yet.</p>
        ) : (
          <ul className="space-y-6">
            {orders.map((order) => (
              <li key={order.id} className="border rounded-lg p-4 bg-gray-50 shadow-sm">
                <p className="text-sm text-gray-500 mb-2">Order Date: {order.date}</p>
                <ul className="divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <li key={item.id} className="py-2 flex justify-between">
                      <span className="text-gray-800">{item.name} × {item.quantity}</span>
                      <span className="text-gray-800">${(item.basePrice * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
