"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineDelete } from "react-icons/md";
import { ProductType } from "@/types";
import { productList } from "@/data/products";
import { useCartContext } from "@/context/CartContext";

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

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseFloat(e.target.value) < 1) {
      dispatch({
        type: "updateQuantity",
        payload: { id: item.id, quantity: 1 },
      });
    } else {
      dispatch({
        type: "updateQuantity",
        payload: { id: item.id, quantity: parseFloat(e.target.value) },
      });
    }
  };

  return (
    <tr className="border-b-[1px] border-black/30 py-[10px]">
      <td align="left" valign="top" className="flex gap-[10px]">
        {cartProduct.image && (
          <Image
            src={cartProduct.image}
            height={60}
            width={60}
            className="border-black/100 border-[2px] rounded-[8px] object-contain"
            alt="Product"
          />
        )}
        <div className="pt-[10px]">
          <h1 className="font-semibold">{cartProduct?.name}</h1>
          <p>{cartProduct?.category}</p>
        </div>
      </td>
      <td align="center" valign="top">
        <input
          type="number"
          className="outline-none w-[50px] text-center border-[2px] border-black/10 cursor-none"
          value={item.quantity}
          onChange={(e) => handleQuantityChange(e)}
        />

        <div
          onClick={() => handleItemRemove(item.id)}
          className="mt-[10px] flex justify-center items-center gap-[5px] font-bold text-[0.9rem] cursor-pointer"
        >
          <MdOutlineDelete className="text-[red]" />
          Remove
        </div>
      </td>
      <td align="right" valign="top">
        <p className="font-semibold text-[1.2rem]">{cartProduct?.price}</p>
      </td>
    </tr>
  );
};

export default CartItem;
