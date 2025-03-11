"use client";

import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MessageBar() {
  const { message } = useCart();
  const [isClient, setIsClient] = useState(false); // Ensure it's running on the client

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !message) return null; // Hide component if no message

  return (
    <div
      className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-lg shadow-md text-sm font-medium flex items-center gap-4 transition-opacity duration-500 ease-in-out opacity-100"
    >
      <span>{message}</span>
      <Link href="/cart">
        <button className="bg-white text-green-600 px-3 py-1 rounded-md font-semibold hover:bg-gray-200 transition-all">
          View Cart
        </button>
      </Link>
    </div>
  );
}
