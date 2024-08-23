export interface ProductViewModel {
  id?: string;
  title?: string;
  description?: string;
  productStatus?: number;
  createdAt?: string;
  updatedAt?: string;
  images: Image[];
}
interface Image {
  imageUrl: string;
}
