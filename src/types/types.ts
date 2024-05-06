export type Category = {
  id: number;
  name: string;
  parent_id: number;
};

export type Product = {
  id: number;
  category_id: number;
  description: string;
  name: string;
  price: number;
  img?: string;
};

export type Image = {
  id: number;
  image_name: string;
  image_url: string;
  product_id: number;
};
export type ProductVars = {
  id: number;
  price: number;
  product_id: number;
  stock: number;
};
export type StateType = {
  isEmpty: boolean;
  categoryLoading: boolean;
  categoryError: boolean;
  productError: boolean;
  productLoading: boolean;
  categoryId: number | null;
  range: Range;
  isShowMoreClicked: boolean;
};

export type Range = {
  from: number;
  to: number;
};

export type CartProduct = {
  id: number;
  category_id: number;
  description: string;
  name: string;
  quantity: number;
  price: number;
  img: string;
  totalPrice: number;
};

export type OrderedProduct = {
  id: number;
  img: string;
  name: string;
  quantity: number;
  totalPrice: number;
  deliveryDate: string;
  deliveryAddress: string;
};
