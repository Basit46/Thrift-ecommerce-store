import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "@/context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import WishListContextProvider from "@/context/WishListContext";
import CartContextProvider from "@/context/CartContext";
import ShippingDetailsProvider from "@/context/ShippingDetailsContext";

export const metadata: Metadata = {
  title: "THRIFT",
  description:
    "Discover Timeless Treasures at THRIFT - Your Premier Online Destination for Quality Second-Hand Fashion. Explore a Curated Collection of Vintage Clothing and Preloved Gems, Uncover Unique Styles with a Sustainable Touch. Shop Now for Affordable Elegance!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-[1400px] mx-auto font-basic">
        <ToastContainer autoClose={2000} className="mt-[50px]" />
        <AuthContextProvider>
          <ShippingDetailsProvider>
            <CartContextProvider>
              <WishListContextProvider>
                <Navbar />
                <main>{children}</main>
                <Footer />
              </WishListContextProvider>
            </CartContextProvider>
          </ShippingDetailsProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
