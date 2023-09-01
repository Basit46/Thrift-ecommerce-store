"use client";

import { ShippingDetailsType } from "@/types";
import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuthContext } from "./AuthContext";

const shippingDetailsContext = createContext({} as ShippingDetailsContextType);

type ShippingDetailsContextType = {
  details: ShippingDetailsType;
  setDetails: React.Dispatch<React.SetStateAction<ShippingDetailsType>>;
  proceedToCheckout: boolean;
};

const ShippingDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { userDetails } = useAuthContext();

  const [details, setDetails] = useState<ShippingDetailsType>({
    name: "",
    email: "",
    telephone: "",
    country: "Nigeria",
    city: "",
    address: "",
    postalcode: "",
  });
  const [proceedToCheckout, setProceedToCheckout] = useState(false);

  useEffect(() => {
    if (userDetails.uid != null) {
      setDetails({
        ...details,
        name: userDetails.name != null ? userDetails.name : "",
        email: userDetails.email != null ? userDetails.email : "",
      });
    }
  }, [userDetails]);

  useEffect(() => {
    if (details.country == "" || details.city == "" || details.address == "") {
      setProceedToCheckout(false);
    } else {
      setProceedToCheckout(true);
    }
  }, [details]);

  return (
    <shippingDetailsContext.Provider
      value={{ details, setDetails, proceedToCheckout }}
    >
      {children}
    </shippingDetailsContext.Provider>
  );
};

export default ShippingDetailsProvider;

export const useShippingDetailsContext = () => {
  return useContext(shippingDetailsContext);
};
