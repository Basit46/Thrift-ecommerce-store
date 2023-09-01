export type ReviewPropType = {
  review: {
    id: number;
    reviewer: string;
    text: string;
  };
};

export type ProductType = {
  id: number;
  name: string;
  image: string;
  size: string;
  price: number;
  category: string;
};

export type UserDetailsType = {
  uid: string | null;
  name: string | null;
  email: string | null;
  photoURL: string | null;
};

export type ProductPropType = {
  product: ProductType;
};
