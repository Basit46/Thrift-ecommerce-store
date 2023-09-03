import { loadStripe } from "@stripe/stripe-js";

export const getStripe = async () => {
  const publishableKey = process.env
    .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;
  const stripePromise = loadStripe(publishableKey);

  const stripe = await stripePromise;
  return stripe;
};
