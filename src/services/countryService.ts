import { Endpoint } from 'src/configs/endpoint';
import { apiClient } from './apiClient';

class CountryService {
  async getAll(): Promise<any> {
    const result = await apiClient.get(Endpoint.COUNTRY);
    return result.data;
  }
}

export const countryService = new CountryService();
