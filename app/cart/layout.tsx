"use client";

import { useCartContext } from "@/context/CartContext";
import { productList } from "@/data/products";
import { getStripe } from "@/utils/getStripe";
import CustomLoader from "@/components/CustomLoader";
import { useAuthContext } from "@/context/AuthContext";
import { countryCodes } from "@/data/countries";
import { toast } from "react-toastify";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { totalPrice, cartItems, loading, setLoading } = useCartContext();
  const { userDetails } = useAuthContext();

  const customerData = {
    email: userDetails.email,
    name: userDetails.name,
    countryCodes: countryCodes,
    cartItems: cartItems.map((item) => {
      if (productList.find((product) => product.id == item.id)) {
        return {
          ...productList.find((product) => product.id == item.id),
          quantity: item.quantity,
        };
      } else {
        return item;
      }
    }),
  };

  const handleCheckout = async () => {
    if (userDetails.uid) {
      setLoading(true);
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify(customerData),
      });

      const sessionID = await response.json();
      const stripe = await getStripe();

      const result = await stripe?.redirectToCheckout({
        sessionId: sessionID,
      });

      if (result?.error) {
        alert(result.error.message);
      }
      setLoading(false);
    } else {
      toast("You need to sign in");
    }
  };

  return (
    <div className="w-full py-[50px] px-[60px]">
      <div className="mt-[20px] w-full min-h-[70vh] flex gap-[50px] ">
        <div className="w-[70%] h-full">{children}</div>
        <div className="flex-1 h-fit">
          <div className="w-full p-[20px] border-[2px] border-black/10 rounded-[8px]">
            <div className="w-full flex justify-between items-center">
              <p>Subtotal</p>
              <p className="font-[600] text-[1.2rem]">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="py-[10px] w-full flex justify-between items-center">
              <p>Discount</p>
              <p className="font-[600] text-[1.2rem]">$0.00</p>
            </div>
            <div className="py-[15px] border-black/10 border-t-[2px] border-dashed w-full flex justify-between items-center">
              <p>Grand total</p>
              <p className="font-[600] text-[1.2rem]">
                ${totalPrice.toFixed(2)}
              </p>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-black/80 hover:bg-black text-white py-[10px] rounded-[8px] text-[1.2rem] flex justify-center items-center gap-[5px]"
            >
              {loading ? (
                <>
                  <CustomLoader />
                  <p>Loading...</p>
                </>
              ) : (
                "CHECKOUT NOW"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
