"use client";

import { useState } from "react";
import Product from "@/components/Product";
import { useWishListContext } from "@/context/WishListContext";
import { useEffect } from "react";
import { RxClipboardCopy } from "react-icons/rx";
import { db } from "@/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { useAuthContext } from "@/context/AuthContext";
import { ProductType } from "@/types";
import { productList } from "@/data/products";

const wishlist = ({
  searchParams,
}: {
  params?: any;
  searchParams?: { uid: string };
}) => {
  //Global state
  const { likedProducts } = useWishListContext();
  const { userDetails } = useAuthContext();

  //Local state
  const [dbProducts, setDbProducts] = useState([] as ProductType[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getUserData = async () => {
      if (searchParams?.uid) {
        const docRef = doc(db, "wishlists", searchParams.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const products: ProductType[] = [];
          const res: number[] = docSnap.data().products;
          res.forEach((item) => {
            const resProduct = productList.find(
              (product) => product.id === item
            );
            if (resProduct) {
              products.push(resProduct);
            }
          });
          setLoading(false);
          setDbProducts(products);
        } else {
          console.log("No such document!");
        }
      } else {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.href}?uid=${userDetails.uid}`
      );
      alert("Copied to Clipboard");
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <div className="py-[50px] px-[60px] ">
      <div className="w-full h-[200px] bg-[#ddd7dc]/70 px-[30px] flex flex-col ">
        {searchParams?.uid ? (
          <>
            <h1 className="text-[3rem] font-braahOne">Your Friend's List</h1>
            <p className="mt-[30px] text-[1.2rem] font-secondary font-medium">
              No gree for am oo!!
            </p>
          </>
        ) : (
          <>
            <h1 className="text-[3rem] font-braahOne">
              Your Favourite Products
            </h1>
            <p className="text-[1.2rem] font-secondary font-medium">
              Share with your friends
            </p>
            <button
              onClick={copyToClipboard}
              className="self-end mt-[20px] text-[1.2rem] text-blue-700 flex items-center gap-[6px]"
            >
              COPY LINK <RxClipboardCopy className="text-[30px]" />
            </button>
          </>
        )}
      </div>
      <div className="mt-[50px] w-full flex flex-wrap gap-[40px]">
        {loading && (
          <p className="mt-[20px] text-[1.5rem] font-secondary font-medium">
            Loading...
          </p>
        )}
        {searchParams?.uid &&
          dbProducts.length > 0 &&
          dbProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        {!searchParams?.uid &&
          likedProducts.length > 0 &&
          likedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default wishlist;
