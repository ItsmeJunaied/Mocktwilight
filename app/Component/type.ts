export interface Product {
    id: number;
    title_name: string;
    description: string;
    price: number;
    images: { url: string }[];
  }