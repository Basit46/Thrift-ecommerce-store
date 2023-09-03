"use client";

import { productList } from "@/data/products";
import { getLocalStorageData } from "@/utils/getLocalStorageData";
import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useContext,
  SetStateAction,
} from "react";
import { toast } from "react-toastify";

const CartContext = createContext({} as CartContextType);

const initialState = getLocalStorageData("cartItems", []);

type CartContextType = {
  cartItems: CartItemType[];
  dispatch: React.Dispatch<ActionType>;
  totalPrice: number;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type CartItemType = {
  id: number;
  quantity: number;
};

type ActionType = {
  type: string;
  payload: number;
};

const reducer = (state: CartItemType[], action: ActionType) => {
  switch (action.type) {
    case "add":
      if (!state.find((item) => item.id === action.payload)) {
        toast("Product added");
        return [...state, { id: action.payload, quantity: 1 }];
      } else {
        toast("Product already added");
        return state;
      }

    case "remove":
      toast("Product removed");
      return state.filter((item) => item.id != action.payload);

    case "increment":
      return state.map((item) =>
        item.id == action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

    case "decrement":
      return state.map((item) =>
        item.id == action.payload
          ? {
              ...item,
              quantity: item.quantity <= 1 ? 1 : item.quantity - 1,
            }
          : item
      );

    case "clearcart":
      return [];

    default:
      return state;
  }
};

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, dispatch] = useReducer(reducer, initialState);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      const res = productList.find((product) => product.id == item.id);
      total += res ? res.price * item.quantity : 0;
    });
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, dispatch, totalPrice, loading, setLoading }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => {
  return useContext(CartContext);
};
