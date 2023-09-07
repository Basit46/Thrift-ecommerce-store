"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineDelete } from "react-icons/md";
import { ProductType } from "@/types";
import { productList } from "@/data/products";
import { useCartContext } from "@/context/CartContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type CartItemType = {
  id: number;
  quantity: number;
};

const CartItem = ({ item }: { item: CartItemType }) => {
  const { dispatch } = useCartContext();

  const [cartProduct, setCartProduct] = useState({} as ProductType);

  useEffect(() => {
    const res = productList.find((product) => product.id == item.id);
    if (res) {
      setCartProduct(res);
      return;
    }
  }, [item]);

  const handleItemRemove = (id: number) => {
    dispatch({ type: "remove", payload: id });
  };

  return (
    <tr className="border-b-[1px] border-black/30 py-[10px]">
      <td align="left" valign="top" className="w-full md:w-[40%]">
        <div className="flex gap-[10px]">
          {cartProduct.image && (
            <Image
              src={cartProduct.image}
              height={60}
              width={60}
              className="w-[70px] h-fit md:h-auto md:w-auto border-black/100 border-[2px] rounded-[8px] object-contain"
              alt="Product"
            />
          )}
          <div className="pt-[10px]">
            <h1 className="font-semibold">{cartProduct?.name}</h1>
            <p>{cartProduct?.category}</p>
          </div>
        </div>

        <div className="md:hidden my-[10px]">
          <div className="w-fit flex border-[2px] border-black/30 items-center gap-[5px] p-[4px]">
            <button
              onClick={() => dispatch({ type: "increment", payload: item.id })}
            >
              <AiOutlinePlus />
            </button>
            <span className="w-[30px] text-center">{item.quantity}</span>
            <button
              onClick={() => dispatch({ type: "decrement", payload: item.id })}
            >
              <AiOutlineMinus />
            </button>
          </div>

          <div
            onClick={() => handleItemRemove(item.id)}
            className="mt-[5px] flex items-center gap-[5px] font-bold text-[0.9rem] cursor-pointer"
          >
            <MdOutlineDelete className="text-[red]" />
            Remove
          </div>
        </div>

        <p className="md:hidden font-semibold text-[1.2rem]">
          ${(cartProduct?.price * item.quantity).toFixed(2)}
        </p>
      </td>
      <td align="center" valign="top" className="hidden md:block">
        <div className="w-fit flex border-[2px] border-black/30 items-center gap-[5px] p-[4px]">
          <button
            onClick={() => dispatch({ type: "increment", payload: item.id })}
          >
            <AiOutlinePlus />
          </button>
          <span className="w-[30px] text-center">{item.quantity}</span>
          <button
            onClick={() => dispatch({ type: "decrement", payload: item.id })}
          >
            <AiOutlineMinus />
          </button>
        </div>

        <div
          onClick={() => handleItemRemove(item.id)}
          className="mt-[10px] flex justify-center items-center gap-[5px] font-bold text-[0.9rem] cursor-pointer"
        >
          <MdOutlineDelete className="text-[red]" />
          Remove
        </div>
      </td>
      <td align="right" valign="top" className="w-[15%] hidden md:block">
        <p className="font-semibold text-[1.2rem]">
          ${(cartProduct?.price * item.quantity).toFixed(2)}
        </p>
      </td>
    </tr>
  );
};

export default CartItem;
