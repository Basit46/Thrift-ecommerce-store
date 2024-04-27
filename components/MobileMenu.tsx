"use client";

import React from "react";
import Link from "next/link";
import { PiShoppingCart } from "react-icons/pi";
import { AiFillHeart } from "react-icons/ai";
import { useCartContext } from "@/context/CartContext";
import { useWishListContext } from "@/context/WishListContext";
import { MobileMenuPropTypes } from "@/types";

const MobileMenu = ({ openMenu, setOpenMenu }: MobileMenuPropTypes) => {
  //Global State
  const { cartItems } = useCartContext();
  const { likedProducts } = useWishListContext();

  return (
    <div
      className={`${
        openMenu ? "h-[300px]" : "h-0 overflow-hidden"
      } xl:hidden fixed top-[12vh] right-0 w-full bg-white duration-200 border-b-2 border-black text-black flex flex-col justify-center gap-[20px] items-center`}
    >
      <Link
        onClick={() => setOpenMenu(false)}
        className="hover:underline duration-200"
        href="/products"
      >
        All Products
      </Link>
      <Link
        onClick={() => setOpenMenu(false)}
        className="hover:underline duration-200"
        href="/men"
      >
        Men
      </Link>
      <Link
        onClick={() => setOpenMenu(false)}
        className="hover:underline duration-200"
        href="/women"
      >
        Women
      </Link>

      <Link
        onClick={() => setOpenMenu(false)}
        href="/wishlist"
        className="flex items-center gap-[5px]"
      >
        <AiFillHeart className="text-[red] text-[30px]" />
        <p>WishList</p>
        {likedProducts.length > 0 && <p>({likedProducts.length})</p>}
      </Link>
      <Link
        onClick={() => setOpenMenu(false)}
        href="/cart"
        className="relative flex items-center gap-[5px]"
      >
        <PiShoppingCart className="text-[30px]" />
        <p>Cart</p>
        {cartItems.length > 0 && <p>({cartItems.length})</p>}
      </Link>
    </div>
  );
};

export default MobileMenu;
