"use client";

import CartItem from "@/components/CartItem";
import { useCartContext } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const cart = () => {
  const { cartItems } = useCartContext();
  return (
    <div className="w-full">
      {cartItems.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr className="border-b-[2px] border-black/30 mb-[20px]">
              <th align="left">PRODUCT</th>
              <th align="center">QUANTITY</th>
              <th align="right">PRICE</th>
            </tr>
          </thead>
          <tbody>
            {cartItems &&
              cartItems.map((item) => <CartItem key={item.id} item={item} />)}
          </tbody>
        </table>
      ) : (
        <div className="w-full flex flex-col items-center">
          <Image
            src="/emptycart.png"
            width={500}
            height={300}
            alt="Empty cart"
            className="w-full xmd:w-auto h-fit xmd:h-auto"
          />
          <p className="text-[1.1rem] mt-[20px]">
            Your cart is empty, start adding products now
          </p>
          <Link
            href="/products"
            className="mt-[10px] bg-[yellow] px-[24px] py-[12px] text-black text-[12px] border-b-[1px] border-black font-bold"
          >
            VIEW ALL PRODUCTS
          </Link>
        </div>
      )}
    </div>
  );
};

export default cart;
