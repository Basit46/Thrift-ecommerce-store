import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="mt-[-12vh] pt-[12vh]  relative w-full h-[100vh]">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/test4.jpg"
          fill
          alt="Cloth Store"
          priority
          className="object-cover"
        />
      </div>
      <div className="relative w-full h-full text-white px-[60px]">
        <h1 className="font-braahOne text-[10rem] leading-[1]">
          THRIFT * STORE
        </h1>
        <p className="text-[1.2rem] pl-[20px] w-[40%]">
          ~Explore a Curated Collection of Vintage Clothing and Preloved Gems,
          Uncover Unique Styles with a Sustainable Touch. Shop Now for
          Affordable Elegance!~
        </p>
      </div>
    </section>
  );
};

export default Hero;
