import { Endpoint } from 'src/configs/endpoint';
import { apiClient } from './apiClient';

class CountryService {
  async getAll(category?: string, page?: number): Promise<any> {
    const result = await apiClient.get(Endpoint.COUNTRY, {
      params: { category: category, page: page },
    });
    return result.data;
  }
}

export const countryService = new CountryService();
