"use client";

import { useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams(); // Obtiene el id de la URL

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Product ID: {id}</h1>
      <p>Here will go the details for product {id}.</p>
    </main>
  );
}
