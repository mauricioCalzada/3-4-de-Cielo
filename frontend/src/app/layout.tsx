import Navbar from "../components/Navbar";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import MessageBar from "../components/MessageBar"; // Importa el nuevo componente

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <CartProvider>
          <MessageBar /> {/* Se renderiza el mensaje sin errores */}
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
