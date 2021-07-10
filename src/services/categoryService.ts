import { Endpoint } from 'src/configs/endpoint';
import { util } from 'src/utils/util';
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

  async deleteCategory(id: string): Promise<any> {
    const endpoint = util.formatString(Endpoint.DELETE_CATEGORY, {
      id,
    });
    const result = await apiClient.delete(endpoint);
    return result;
  }
}

export const categoryService = new CategoryService();
