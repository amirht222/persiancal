export interface LabViewModel {
  id?: string;
  name?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  labImages: Image[];
}
interface Image {
  imageUrl: string;
}
