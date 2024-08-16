interface ErrorProps {
  error: Error;
  reset: () => void;
}

interface ProductType {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
  gql_id: string;
}

type CartItem = {
  title: string;
  price: number;
  quantity: number;
  id: string;
  image: string;
  merchandiseId: string;
};

type Collection = {
  id: string;
  title: string;
  handle: string;
};

type CustomerAccessToken = {
  accessToken: string;
  expiresAt: string;
};
