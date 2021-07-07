import { Endpoint } from 'src/configs/endpoint';
import { apiClient } from './apiClient';

class HtmlService {
  async getNotification(): Promise<any> {
    const result = await apiClient.get(Endpoint.HTML);

    return result;
  }

  async putNotification(html: string): Promise<any> {
    const result = await apiClient.put(Endpoint.HTML, { file: html });
    return result;
  }
}

export const htmlService = new HtmlService();
