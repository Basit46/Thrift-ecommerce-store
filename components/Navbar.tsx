"use client";

import Link from "next/link";
import { PiShoppingCart } from "react-icons/pi";
import { BiUserMinus } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";

const Navbar = () => {
  const { userDetails, handleSignIn, handleSignOut } = useAuthContext();
  return (
    <nav className="sticky top-0 z-[20] bg-black text-white px-[70px] h-[12vh] flex justify-between items-center text-[1.1rem] font-medium">
      <h1 className="font-braahOne text-[2rem] font-bold">
        <Link href="/">THRIFT~</Link>
      </h1>
      <div className="flex gap-[20px] items-center">
        <Link className="hover:underline duration-200" href="/products">
          All Products
        </Link>
        <Link className="hover:underline duration-200" href="/men">
          Men
        </Link>
        <Link className="hover:underline duration-200" href="/women">
          Women
        </Link>
      </div>

      <div className="flex gap-[30px] items-center">
        <Link href="/wishlist" className="flex items-center gap-[5px]">
          <AiOutlineHeart /> Wish List
        </Link>
        <Link href="/cart" className="flex items-center gap-[5px]">
          <PiShoppingCart /> Cart
        </Link>
        {userDetails.uid ? (
          <Link href="/" className="flex items-center gap-[5px]">
            {userDetails.photoURL && (
              <div className="relative w-[40px] h-[40px] rounded-full bg-gray-400 overflow-hidden">
                <Image
                  src={userDetails.photoURL}
                  fill
                  className="object-contain"
                  alt="user photo"
                />
              </div>
            )}{" "}
            Hello {userDetails.name?.slice(0, userDetails.name?.indexOf(" "))}
            <BiUserMinus onClick={handleSignOut} className="text-[30px]" />
          </Link>
        ) : (
          <div onClick={handleSignIn} className="px-6 sm:px-0 max-w-sm">
            <button
              type="button"
              className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <FcGoogle className="text-[25px]" />
              Sign In with Google
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
