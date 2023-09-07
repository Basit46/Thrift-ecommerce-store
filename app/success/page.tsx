"use client";

import { useCartContext } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Success = () => {
  const { dispatch } = useCartContext();
  useEffect(() => {
    dispatch({ type: "clearcart", payload: 1 });
  }, []);
  return (
    <div className="h-[80vh] px-[20px] md:px-[60px] py-[50px] flex flex-col items-center">
      <Image
        src="/success.png"
        width={500}
        height={150}
        alt="Payment success image"
      />
      <h1 className="mt-[5px] mb-[5px] text-[1.2rem] font-medium ">
        Thanks for your purchase. Your order is on it's way 👍
      </h1>
      <Link
        href="/products"
        className="bg-[yellow] px-[24px] py-[12px] text-black text-[12px] border-b-[1px] border-black font-bold"
      >
        SHOP MORE PRODUCTS
      </Link>
    </div>
  );
};

export default Success;
