export interface ProductViewModel {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
  productStatus?: number;
  createdAt?: string;
  updatedAt?: string;
  images: Image[];
}
interface Image {
  imageUrl: string;
}
