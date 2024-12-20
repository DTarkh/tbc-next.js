export interface BlogType {
  id: number | string;
  title_en: string;
  title_ge: string;
  body_en: string;
  body_ge: string;
  category_en: string;
  category_ge: string;
  likes: number;
  dislikes: number;
  views: number;
  created_at: number;
 
}

export interface ProductType {
  id: number;
  title_en: string;
  title_ge: string;
  description_en: string;
  description_ge: string;
  category_en: string;
  category_ge: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaData;
  images: string[];
  thumbnail: string;
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface MetaData {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface NewProduct {
  id: string;
  title: string;
  price: string;
  rating: number;
  discountPercentage: number;
  thumbnail: string;
}

export interface AddProductProps {
  setIsActive: (isActive: boolean) => void;
  products: NewProduct[];
  setProducts: (products: NewProduct[]) => void;
}
