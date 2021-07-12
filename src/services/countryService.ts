import { Endpoint } from 'src/configs/endpoint';
import { apiClient } from './apiClient';

class CountryService {
  async getAll(category?: string, page?: number): Promise<any> {
    const result = await apiClient.get(Endpoint.COUNTRY, {
      params: { category: category, page: page, page_size: 10 },
    });
    return result.data;
  }

  async postCountry(request: any): Promise<any> {
    const result = await apiClient.post(Endpoint.COUNTRY, request);
    return result;
  }
}

export const countryService = new CountryService();
