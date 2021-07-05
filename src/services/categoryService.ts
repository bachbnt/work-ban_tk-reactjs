import { Endpoint } from 'src/configs/endpoint';
import { apiClient } from './apiClient';

class CategoryService {
  async getCategories(): Promise<any> {
    const result = await apiClient.get(Endpoint.CATEGORY);
    return result;
  }
  async postCategory(name: string): Promise<any> {
    const result = await apiClient.post(Endpoint.CATEGORY, { name });
    return result;
  }
}

export const categoryService = new CategoryService();
