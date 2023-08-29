import Product from "@/components/Product";
import { RxClipboardCopy } from "react-icons/rx";

const wishlist = () => {
  return (
    <div className="py-[50px] px-[60px] ">
      <div className="w-full h-[200px] bg-[#ddd7dc]/70 px-[30px] flex flex-col ">
        <h1 className="text-[3rem] font-braahOne">Your Favourite Products</h1>
        <p className="text-[1.2rem] font-secondary font-medium">
          Share with your friends
        </p>
        <p className="self-end mt-[20px] text-[1.2rem] text-blue-700 flex items-center gap-[6px]">
          COPY LINK <RxClipboardCopy className="text-[30px]" />
        </p>
      </div>
      <div className="mt-[50px] w-full flex flex-wrap gap-[40px] justify-center">
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

export default wishlist;
