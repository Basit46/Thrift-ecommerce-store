"use client";

import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useContext,
} from "react";
import { toast } from "react-toastify";

const CartContext = createContext({} as CartContextType);

const initialState: CartItemType[] = [{ id: 1, quantity: 1 }];

type CartContextType = {
  cartItems: CartItemType[];
  dispatch: React.Dispatch<ActionType>;
};

type CartItemType = {
  id: number;
  quantity: number;
};

type ActionType =
  | {
      type: "add";
      payload: number;
    }
  | {
      type: "remove";
      payload: number;
    }
  | {
      type: "updateQuantity";
      payload: { id: number; quantity: number };
    };
//  type ReducerType = (state: CartItemType[], action: ActionType) => CartItemType[]

const reducer = (state: CartItemType[], action: ActionType) => {
  switch (action.type) {
    case "add":
      if (!state.find((item) => item.id === action.payload)) {
        toast("Product added");
        return [...state, { id: action.payload, quantity: 3 }];
      } else {
        toast("Product already added");
        return state;
      }

    case "remove":
      toast("Product removed");
      return state.filter((item) => item.id != action.payload);

    case "updateQuantity":
      return state.map((item) =>
        item.id == action.payload.id
          ? {
              ...item,
              quantity: action.payload.quantity,
            }
          : item
      );

    default:
      return state;
  }
};

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => {
  return useContext(CartContext);
};
