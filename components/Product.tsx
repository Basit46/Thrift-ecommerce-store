"use client";

import { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { ProductPropType } from "@/types";

const Product = ({ product }: ProductPropType) => {
  const [isLiked, setIsliked] = useState(false);
  return (
    <div className="w-[241.59px] h-fit">
      <Link href={`/products/${product.id}`}>
        <div className="w-full h-[241.59px] relative border-[1px] border-black overflow-hidden">
          <Image
            src={product.image}
            className="object-contain"
            fill
            alt="Product Image"
          />
        </div>
      </Link>
      <div>
        <div className="flex justify-between items-center">
          <p>{product.name}</p>
          <p className="text-[14px] font-bold">{product.price}</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-[yellow] px-[24px] py-[12px] text-black text-[12px] border-b-[1px] border-black font-bold">
            ADD TO CART
          </button>
          <div className="">
            {isLiked ? (
              <AiFillHeart
                onClick={() => setIsliked(false)}
                className="text-[30px] text-[red]"
              />
            ) : (
              <AiOutlineHeart
                onClick={() => setIsliked(true)}
                className="text-[30px] text-[red]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
