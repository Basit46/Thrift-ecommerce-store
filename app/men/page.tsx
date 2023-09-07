import Product from "@/components/Product";
import { productList } from "@/data/products";
import Image from "next/image";

const men = async () => {
  const fetchedProducts = await productList.filter(
    (product) => product.category === "men"
  );

  return (
    <div className="w-full py-[50px] px-[20px] xmd:px-[60px]">
      <div className="w-full h-fit bg-[#ddd7dc]/70 flex gap-[100px] items-center py-[10px] xl:py-0 px-[20px] xl:px-[30px]">
        <Image
          src="/man.png"
          width={300}
          height={500}
          alt="Woman Image"
          className="w-auto h-auto hidden xl:block"
        />
        <div>
          <h1 className="text-[2rem] vsm:text-[2.5rem] xmd:text-[3rem] text-center vsm:text-left font-braahOne leading-[1]">
            Quality pre-loved fashion for Men
          </h1>
          <p className="mt-[20px] text-[1.2rem] font-secondary font-medium text-center vsm:text-left">
            Start Shopping 😎
          </p>
        </div>
      </div>
      <div className="mt-[50px] w-full flex flex-wrap gap-[40px] justify-center">
        {fetchedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default men;
