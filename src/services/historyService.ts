import { Endpoint } from 'src/configs/endpoint';
import { apiClient } from './apiClient';

class HistoryService {
  async getAll(page?: number): Promise<any> {
    const result = await apiClient.get(Endpoint.HISTORY, {
      params: { page: page },
    });
    return result.data;
  }
}

export const historyService = new HistoryService();
