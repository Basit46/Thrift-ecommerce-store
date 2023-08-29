import React from "react";

const ShippingDetails = () => {
  return (
    <form className="shipping-section w-full p-[20px] border-[2px] border-black/10 rounded-[8px]">
      <label htmlFor="name">Full name*</label>
      <input type="text" id="name" placeholder="John Doe" />

      <div className="w-full flex justify-between">
        <div className="w-[48%]">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" placeholder="Johndoe@gmail.com" />
        </div>
        <div className="w-[48%]">
          <label htmlFor="phone">Phone number*</label>
          <input type="number" id="phone" placeholder="+10000000000" />
        </div>
      </div>

      <div className="w-full flex justify-between">
        <div className="w-[48%]">
          <label htmlFor="country">Select shipping country</label>
          <select id="country">
            <option value="Nigeria">Nigeria</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
        <div className="w-[48%]">
          <label htmlFor="city">City*</label>
          <input type="text" id="city" placeholder="Dakar" />
        </div>
      </div>

      <label htmlFor="address">House Address*</label>
      <input
        type="text"
        id="address"
        placeholder="19, Seth Mynx Street, Mabu."
      />

      <label htmlFor="postalcodee">Postal code (optional)</label>
      <input
        className="w-[48%]"
        type="number"
        id="postalcode"
        placeholder="394123"
      />
    </form>
  );
};

export default ShippingDetails;
