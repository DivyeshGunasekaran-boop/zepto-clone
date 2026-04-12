export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  imageUrl: string;
  price: number;
  originalPrice: number;
  discount: number;
  discountLabel: string;
  weight: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface SearchState {
  query: string;
  isActive: boolean;
  results: Product[];
}
