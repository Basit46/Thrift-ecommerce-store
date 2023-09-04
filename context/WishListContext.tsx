"use client";

import { ProductType } from "@/types";
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { db } from "@/firebaseConfig";
import { collection, setDoc, doc } from "firebase/firestore";
import { useAuthContext } from "./AuthContext";

const WishListContext = createContext({} as WishListContextType);

type WishListContextType = {
  likedProducts: ProductType[];
  setLikedProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  handleLike: (product: ProductType) => void;
  handleUnLike: (id: number) => void;
};

const WishListContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //Global State
  const { userDetails } = useAuthContext();

  //Local State
  const [likedProducts, setLikedProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    // Retrieve likedProducts from localStorage and update state
    const storedLikedProducts = localStorage.getItem("likedProducts");
    if (storedLikedProducts) {
      setLikedProducts(JSON.parse(storedLikedProducts));
    }
  }, []);

  useEffect(() => {
    // Save likedProducts to localStorage
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  const handleUnLike = (id: number) => {
    setLikedProducts(
      likedProducts.filter((likedproduct) => likedproduct.id != id)
    );
    toast("Removed");
  };
  const handleLike = (product: ProductType) => {
    setLikedProducts([...likedProducts, product]);
    toast("Added to Wishlist");
  };

  const wishlistRef = collection(db, "wishlists");

  useEffect(() => {
    const addProductsToDB = async () => {
      if (userDetails.uid != null) {
        await setDoc(doc(wishlistRef, userDetails.uid), {
          products: likedProducts.map((item) => item.id),
        });
      }
    };

    addProductsToDB();
  }, [likedProducts]);

  return (
    <WishListContext.Provider
      value={{ likedProducts, setLikedProducts, handleLike, handleUnLike }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListContextProvider;

export const useWishListContext = () => {
  return useContext(WishListContext);
};
