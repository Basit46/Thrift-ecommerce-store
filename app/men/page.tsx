import Product from "@/components/Product";
import { productList } from "@/data/products";
import Image from "next/image";

const men = async () => {
  const fetchedProducts = await productList.filter(
    (product) => product.category === "men"
  );

  return (
    <div className="w-full py-[50px] px-[60px]">
      <div className="w-full h-fit bg-[#ddd7dc]/70 flex gap-[100px] items-center px-[30px]">
        <Image src="/man.png" width={300} height={500} alt="Woman Image" />
        <div>
          <h1 className="text-[3rem] font-braahOne">
            Quality pre-loved fashion
          </h1>
          <p className="text-[1.2rem] font-secondary font-medium">
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
