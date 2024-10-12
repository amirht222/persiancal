export interface Activity {
  id: string;
  text: string;
  imagePath?: string;
}

export interface ProviderViewModel {
  providerTitle: string;
  address?: string;
  aboutUs?: string;
  telephone?: string;
  fax?: string;
  email?: string;
  providerActivities?: Activity[];
  createdAt?: string;
  updatedAt?: string;
}
