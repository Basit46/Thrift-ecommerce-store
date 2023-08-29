import React from "react";
import Image from "next/image";
import { MdOutlineDelete } from "react-icons/md";

const CartItem = () => {
  return (
    <tr className="border-b-[1px] border-black/30 py-[10px]">
      <td align="left" valign="top" className="flex gap-[10px]">
        <Image
          src="/cloth.webp"
          height={60}
          width={60}
          className="border-black/100 border-[2px] rounded-[8px] object-contain"
          alt="Product"
        />
        <div className="pt-[10px]">
          <h1 className="font-semibold">Land Cloth</h1>
          <p>Men</p>
        </div>
      </td>
      <td align="center" valign="top">
        <div className="w-fit flex border-[2px] border-black/10 px-[10px] py-[2px] gap-[5px]">
          <p className="text-[1.2rem] cursor-pointer">-</p>
          <input
            type="number"
            className="outline-none w-[30px] text-center"
            min={1}
            placeholder="1"
          />
          <p className="text-[1.2rem] cursor-pointer">+</p>
        </div>
        <div className="mt-[10px] flex justify-center items-center gap-[5px] font-bold text-[0.9rem] cursor-pointer">
          <MdOutlineDelete className="text-[red]" />
          Remove
        </div>
      </td>
      <td align="right" valign="top">
        <p className="font-semibold text-[1.2rem]">$2500.00</p>
      </td>
    </tr>
  );
};

export default CartItem;
