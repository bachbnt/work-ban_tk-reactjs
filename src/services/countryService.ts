import { Endpoint } from 'src/configs/endpoint';
import { util } from 'src/utils/util';
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

  async deleteCountry(id: string): Promise<any> {
    const endpoint = util.formatString(Endpoint.DELETE_COUNTRY, {
      id,
    });
    const result = await apiClient.delete(endpoint);
    return result;
  }

  async patchCountry(request: any, id: string): Promise<any> {
    const endpoint = util.formatString(Endpoint.DELETE_COUNTRY, {
      id,
    });
    console.log(request);
    const result = await apiClient.patch(endpoint, request);
    return result;
  }
}

export const countryService = new CountryService();
