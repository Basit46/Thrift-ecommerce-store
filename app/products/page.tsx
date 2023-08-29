import Product from "@/components/Product";
import React from "react";

const products = () => {
  return (
    <div className="w-full py-[50px] ">
      <div className="mb-[30px]">
        <h1 className="text-center text-[1.5rem] font-secondary font-bold">
          Shop Secondhand Men and Women Items
        </h1>
        <p className="mt-[10px] w-[60%] text-center mx-auto font-medium">
          We've gathered a captivating array of pre-loved items that weave
          together stories of style and individuality. From timeless classics to
          one-of-a-kind pieces, our assortment speaks to diverse tastes and
          offers a chance to embrace fashion that's both unique and
          environmentally conscious.
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-[40px] justify-center">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default products;
