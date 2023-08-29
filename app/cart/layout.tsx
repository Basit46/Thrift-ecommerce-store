"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="w-full py-[50px] px-[60px]">
      <div className="flex items-center gap-[10px]">
        <Link
          href="/cart"
          className={`${!pathname.includes("shippingdetails") && "font-bold"}`}
        >
          Cart
        </Link>
        <MdKeyboardArrowRight />
        <Link
          href="/cart/shippingdetails"
          className={`${pathname.includes("shippingdetails") && "font-bold"}`}
        >
          Shipping Details
        </Link>
      </div>
      <div className="mt-[20px] w-full min-h-[70vh] flex gap-[50px] ">
        <div className="w-[70%] h-full">{children}</div>
        <div className="flex-1 h-fit">
          <div className="w-full p-[20px] border-[2px] border-black/10 rounded-[8px]">
            <div className="w-full flex justify-between items-center">
              <p>Subtotal</p>
              <p className="font-[600] text-[1.2rem]">$2500.00</p>
            </div>
            <div className="py-[10px] w-full flex justify-between items-center">
              <p>Discount</p>
              <p className="font-[600] text-[1.2rem]">$0.00</p>
            </div>
            <div className="py-[15px] border-black/10 border-t-[2px] border-dashed w-full flex justify-between items-center">
              <p>Grand total</p>
              <p className="font-[600] text-[1.2rem]">$2500.00</p>
            </div>
            <button className="w-full bg-black/80 hover:bg-black text-white py-[10px] rounded-[8px] text-[1.2rem]">
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
