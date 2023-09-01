"use client";

import { useShippingDetailsContext } from "@/context/ShippingDetailsContext";
import { countriesList } from "@/data/countries";
import React from "react";

const ShippingDetails = () => {
  const { details, setDetails } = useShippingDetailsContext();
  return (
    <form className="shipping-section w-full p-[20px] border-[2px] border-black/10 rounded-[8px]">
      <label htmlFor="name">Full name*</label>
      <input
        required
        type="text"
        id="name"
        value={details.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDetails({ ...details, name: e.target.value })
        }
        placeholder="John Doe"
      />

      <div className="w-full flex justify-between">
        <div className="w-[48%]">
          <label htmlFor="email">Email*</label>
          <input
            required
            type="email"
            id="email"
            value={details.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDetails({ ...details, email: e.target.value })
            }
            placeholder="Johndoe@gmail.com"
          />
        </div>
        <div className="w-[48%]">
          <label htmlFor="phone">Phone number*</label>
          <input
            required
            type="number"
            id="phone"
            value={details.telephone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDetails({ ...details, telephone: e.target.value })
            }
            placeholder="+10000000000"
          />
        </div>
      </div>

      <div className="w-full flex justify-between">
        <div className="w-[48%]">
          <label htmlFor="country">Select shipping country</label>
          <select
            id="country"
            value={details.country}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setDetails({ ...details, country: e.target.value })
            }
          >
            {countriesList.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[48%]">
          <label htmlFor="city">City*</label>
          <input
            required
            type="text"
            id="city"
            value={details.city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDetails({ ...details, city: e.target.value })
            }
            placeholder="Dakar"
          />
        </div>
      </div>

      <label htmlFor="address">House Address*</label>
      <input
        required
        type="text"
        id="address"
        value={details.address}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDetails({ ...details, address: e.target.value })
        }
        placeholder="19, Seth Mynx Street, Mabu."
      />

      <label htmlFor="postalcodee">Postal code (optional)</label>
      <input
        required
        className="w-[48%]"
        type="number"
        id="postalcode"
        value={details.postalcode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDetails({ ...details, postalcode: e.target.value })
        }
        placeholder="394123"
      />
    </form>
  );
};

export default ShippingDetails;
