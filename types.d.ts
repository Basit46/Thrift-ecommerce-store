export type ReviewPropType = {
  review: {
    id: number;
    reviewer: string;
    text: string;
  };
};

export type ProductType = {
  params: { productId: string };
  searchParams: any;
};

export type UserDetailsType = {
  uid: string | null;
  name: string | null;
  email: string | null;
  photoURL: string | null;
};
