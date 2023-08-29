"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { BiBadgeCheck } from "react-icons/bi";
import { productList } from "@/data/products";
import { ProductType } from "@/types";

const product = ({ params }: { params: { productId: string } }) => {
  const [isLiked, setIsliked] = useState(false);
  const [resProduct, setResProduct] = useState<ProductType | undefined>(
    undefined
  );

  useEffect(() => {
    setResProduct(
      productList.find((product) => product.id.toString() == params.productId)
    );
  }, [params.productId]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="mx-auto w-[85%] h-[90vh] py-[50px] px-[60px] flex  ">
      <div className="w-[35%] border-black border-[1px]">
        {resProduct && (
          <Slider {...settings}>
            <div className="relative w-[300px] h-[450px] overflow-hidden">
              <Image
                src={resProduct?.image}
                fill
                alt="Product"
                className="object-contain"
              />
            </div>
            <div className="relative w-[300px] h-[450px] overflow-hidden">
              <Image
                src={resProduct?.image}
                fill
                alt="Product"
                className="object-contain scale-[1.5]"
              />
            </div>
            <div className="relative w-[300px] h-[450px] overflow-hidden">
              <Image
                src={resProduct?.image}
                fill
                alt="Product"
                className="object-contain scale-[2] origin-top"
              />
            </div>
          </Slider>
        )}
      </div>

      <div className="w-[50%] p-[20px] flex flex-col">
        <h1 className="text-[1.5rem] font-bold">{resProduct?.name}</h1>
        <p>{resProduct?.category}</p>
        <div className="mt-[30px] bg-[yellow] rounded-[15px] w-full flex justify-between items-center px-[20px] py-[10px]">
          <p className="text-[2rem] font-bold">$69.00</p>
          <button className="bg-white px-[20px] py-[10px] rounded-[20px]">
            ADD TO CART
          </button>
        </div>
        <div className="mt-[10px] bg-green-200 rounded-[15px] w-full flex justify-between items-center px-[20px] py-[10px]">
          <p className="text-[1.3rem] font-bold">ADD TO WISHLIST</p>
          {isLiked ? (
            <AiFillHeart
              onClick={() => setIsliked(false)}
              className="text-[60px] text-[red]"
            />
          ) : (
            <AiOutlineHeart
              onClick={() => setIsliked(true)}
              className="text-[60px] text-[red]"
            />
          )}
        </div>
        <div className="mt-[30px] flex gap-[20px]">
          <div className="w-[40%] flex items-center gap-[10px]">
            <BsTruck className="text-[30px]" />
            <p>Free shipping over £50</p>
          </div>
          <div className="w-[40%] flex items-center gap-[10px]">
            <BiBadgeCheck className="text-[40px]" />
            <p>Every item is quality checked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
