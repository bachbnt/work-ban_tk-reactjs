import { Endpoint } from 'src/configs/endpoint';
import { apiClient } from './apiClient';

class ProductService {
  async getProducts(page?: number): Promise<any> {
    const result = await apiClient.get(Endpoint.PRODUCT, {
      params: { page: page, page_size: 10 },
    });
    return result;
  }
  async buyProduct(country: string, quantity: number): Promise<any> {
    const result = await apiClient.post(Endpoint.BUY, { country, quantity });
    return result;
  }
  async uploadProduct(data: any): Promise<any> {
    const result = await apiClient.post(Endpoint.UPLOAD, data);
    return result;
  }
}

export const productService = new ProductService();
