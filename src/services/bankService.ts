import { Endpoint } from 'src/configs/endpoint';
import { apiClient } from './apiClient';

class BankService {
  async getInfo(): Promise<any> {
    const result = await apiClient.get(Endpoint.BANK);
    return result;
  }
}

export const bankService = new BankService();
