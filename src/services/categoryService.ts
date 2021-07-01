import { Endpoint } from 'src/configs/endpoint';
import { apiClient } from './apiClient';

class CategoryService {
  async getAll(): Promise<any> {
    const result = await apiClient.get(Endpoint.CATEGORY);
    return result;
  }
}

export const categoryService = new CategoryService();
