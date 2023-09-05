"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { ProductPropType } from "@/types";
import { useWishListContext } from "@/context/WishListContext";
import { useCartContext } from "@/context/CartContext";

const Product = ({ product }: ProductPropType) => {
  const { likedProducts, handleLike, handleUnLike } = useWishListContext();
  const { dispatch } = useCartContext();

  const [isLiked, setIsliked] = useState(false);

  useEffect(() => {
    if (likedProducts.find((likedProduct) => likedProduct.id == product.id)) {
      setIsliked(true);
    } else {
      setIsliked(false);
    }
  }, [likedProducts]);

  const handleAddTocart = (id: number) => {
    dispatch({ type: "add", payload: id });
  };
  return (
    <div className="w-[241.59px] h-fit">
      <Link href={`/products/${product?.id}`}>
        <div className="w-full h-[241.59px] relative border-[1px] border-black overflow-hidden">
          <Image
            src={product.image}
            className="object-contain"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Product Image"
          />
        </div>
      </Link>
      <div>
        <div className="flex justify-between items-center">
          <p>{product.name}</p>
          <p className="text-[14px] font-bold">${product.price.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => handleAddTocart(product.id)}
            className="bg-[yellow] px-[24px] py-[12px] text-black text-[12px] border-b-[1px] border-black font-bold"
          >
            ADD TO CART
          </button>
          <div className="">
            {isLiked ? (
              <AiFillHeart
                onClick={() => handleUnLike(product.id)}
                className="text-[30px] text-[red]"
              />
            ) : (
              <AiOutlineHeart
                onClick={() => handleLike(product)}
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
