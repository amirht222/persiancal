export interface ProductViewModel {
  id?: string;
  title?: string;
  description?: string;
  productStatus?: number;
  createdAt?: string;
  updatedAt?: string;
  productImages: Image[];
}
interface Image {
  imageUrl: string;
}
