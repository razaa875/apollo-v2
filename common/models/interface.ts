export interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
  address: string;
  created_at: string;
  date_of_birth: string;
  gender: string;
  last_login: string
  phone_number: string;
  profile_picture_url: string;
  status: string;
}

export interface ICategories {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

export interface IProductByCategory {
  id: number;
  title: string;
  description: string;
  price: string;
  sale_price: string;
  image: string;
  link: string;
  rating: string;
  reviews: string;
  category_ids: number[];
  categories: string[];
  stock: number;
  is_deal: boolean;
  deal_discount_percent: number;
  is_custom_deal: boolean;
  custom_deal_description: string | null;
  custom_deal_start_date: string | null;
  custom_deal_end_date: string | null;
  slug: string;
}

export interface INewArrivals {
  id: number,
  image: string,
  title: string,
  price: string,
  sale_price: string,
  rating: string,
  reviews: string,
  link: string,
  category_ids: number[],
  categories: string[],
  description: string,
  stock: number,
  is_new_arrival: number,
  is_deal: number,
  discount: string,
  slug: string
}

export interface IExploreProducts {
  id: number;
  title: string;
  description: string;
  price: string;
  sale_price: string;
  image: string;
  link: string;
  rating: string;
  reviews: string;
  category_ids: number[];
  categories: string[];
  stock: number;
  is_explore_product: boolean;
  is_deal: boolean;
  deal_discount_percent: string;
  deal_start_date: string;
  deal_end_date: string;
  is_custom_deal: boolean;
  custom_deal_description: string;
  custom_deal_start_date: string
  custom_deal_end_date: string
  slug: string;
}


export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: string;
  sale_price: string;
  image: string;
  link: string;
  rating: string;
  reviews: string;
  category_ids: number[];
  categories: string[];
  stock: number;
  is_deal: boolean;
  deal_discount_percent: number;
  is_custom_deal: boolean;
  is_wishlisted: boolean;
  custom_deal_description: string;
  custom_deal_start_date: string;
  custom_deal_end_date: string;
  slug: string;
}

export interface IOrderDetail {
  id: number;
  total_amount: string;
  status: string;
  created_at: string;
  items: IOrderItem[];
  shippingAddress: IShippingAddress;
}

export interface IOrderItem {
  quantity: number;
  price: string;
  product_name: string;
  product_slug: string;
  product_description: string;
  image_url: string;
}

export interface IShippingAddress {
  id: number;
  full_name: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone: string;
  status: string;
  is_default: number;
  created_at: string;
}


export interface IWishList {
  wishlist_id: number;
  product_id: number;
  name: string;
  slug: string;
  description: string;
  price: string;
  sale_price: string;
  image_url: string;
  is_deal: number;
  deal_discount_percent: number;
}

export interface IPagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface IReview {
  comment: string;
  createdAt: string;
  userName: string;
  id: number;
  rating: number;
  userId: number;
}