import { ProductDetails } from './product-details';

export interface GetProductsResponse {
  success: boolean;
  message: string;
  data: ProductDetails[];
}
