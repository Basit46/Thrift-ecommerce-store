import CartItem from "@/components/CartItem";

const cart = () => {
  return (
    <div className="w-full">
      <table className="w-full">
        <tr className="border-b-[2px] border-black/30 mb-[20px]">
          <th align="left">PRODUCT</th>
          <th align="center">QUANTITY</th>
          <th align="right">PRICE</th>
        </tr>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </table>
    </div>
  );
};

export default cart;
