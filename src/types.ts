export interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  phone: string;
  email: string;
  image: string;
}

export interface BusinessFormData extends Omit<Business, 'id'> {}