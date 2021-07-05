import { Endpoint } from 'src/configs/endpoint';
import { apiClient } from './apiClient';

class ProductService {
  async getProducts(page?: number): Promise<any> {
    const result = await apiClient.get(Endpoint.PRODUCT, { params: { page } });
    return result;
  }
  async buyProduct(country: string, quantity: number): Promise<any> {
    const result = await apiClient.post(Endpoint.BUY, { country, quantity });
    return result;
  }
}

export const productService = new ProductService();
