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
