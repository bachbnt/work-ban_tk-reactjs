import { Endpoint } from 'src/configs/endpoint';
import { apiClient } from './apiClient';

class HtmlService {
  async getHtmlNotification(): Promise<any> {
    const result = await apiClient.get(Endpoint.HTML);

    return result;
  }
}

export const htmlService = new HtmlService();
