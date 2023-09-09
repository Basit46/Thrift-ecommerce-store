"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartContext } from "@/context/CartContext";
import { useWishListContext } from "@/context/WishListContext";
import { PiShoppingCart } from "react-icons/pi";
import { AiFillHeart } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "@/context/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  //Global State
  const { userDetails, handleSignIn, handleSignOut } = useAuthContext();
  const { cartItems } = useCartContext();
  const { likedProducts } = useWishListContext();

  //Local state
  //Open and Close Menu
  const [openMenu, setOpenMenu] = useState(false);
  //Log out button state
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[20] bg-black text-white px-[20px] xmd:px-[70px] h-[12vh] flex justify-between items-center text-[1.1rem] font-medium">
      <h1 className="font-braahOne text-[2rem] font-bold">
        <Link onClick={() => setOpenMenu(false)} href="/">
          THRIFT
        </Link>
      </h1>
      <div className="hidden xl:flex gap-[20px] items-center">
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

      <div className="flex-1 xl:flex-none flex justify-end xl:justify-start gap-[30px] items-center mr-[10px] md:mr-[20px] xl:mr-0">
        <Link
          href="/wishlist"
          className="hidden xl:flex items-center gap-[5px]"
        >
          <AiFillHeart className="text-[red] text-[30px]" />
          <p>WishList</p>
          {likedProducts.length > 0 && <p>({likedProducts.length})</p>}
        </Link>
        <Link
          href="/cart"
          className="relative hidden xl:flex items-center gap-[5px]"
        >
          <PiShoppingCart className="text-[30px]" />
          <p>Cart</p>
          {cartItems.length > 0 && <p>({cartItems.length})</p>}
        </Link>
        {userDetails.uid ? (
          <div className="relative">
            <Link href="/" className="flex items-center gap-[5px]">
              {userDetails.photoURL && (
                <div className="relative w-[40px] h-[40px] rounded-full bg-gray-400 overflow-hidden">
                  <Image
                    src={userDetails.photoURL}
                    fill
                    className="object-contain"
                    alt="user photo"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <p className="hidden vsm:block">
                Hello{" "}
                {userDetails.name?.slice(0, userDetails.name?.indexOf(" "))}
              </p>

              {open ? (
                <MdOutlineKeyboardArrowUp onClick={() => setOpen(false)} />
              ) : (
                <MdOutlineKeyboardArrowDown onClick={() => setOpen(true)} />
              )}
            </Link>
            <div
              className={`${
                !open && "hidden"
              } absolute top-[50px] left-[-100px] sm:left-0 w-[200px] h-[80px] bg-white border-black border-[1px] flex flex-col justify-end items-center pb-[10px]`}
            >
              <button
                onClick={() => {
                  handleSignOut();
                  setOpen(false);
                }}
                className="w-[80%] mx-auto bg-black text-white hover:text-white hover:bg-black px-[10px] py-[5px] active:px-[8px] border-black border-[1px]"
              >
                SIGN OUT
              </button>
            </div>
          </div>
        ) : (
          <div onClick={handleSignIn} className="px-[10px] sm:px-0 max-w-sm">
            <button
              type="button"
              className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <FcGoogle className="text-[25px]" />
              Sign In
            </button>
          </div>
        )}
      </div>

      {openMenu ? (
        <FaTimes
          onClick={() => setOpenMenu(false)}
          className="block xl:hidden text-[25px] text-[red]"
        />
      ) : (
        <FaBars
          onClick={() => setOpenMenu(true)}
          className="block xl:hidden text-[25px]"
        />
      )}

      {/* Visible on screens with width less than 1280px */}
      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </nav>
  );
};

export default Navbar;
