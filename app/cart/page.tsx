"use client";

import CartItem from "@/components/CartItem";
import { useCartContext } from "@/context/CartContext";

const cart = () => {
  const { cartItems } = useCartContext();
  return (
    <div className="w-full">
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
    </div>
  );
};

export default cart;
