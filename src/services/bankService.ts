import { Endpoint } from 'src/configs/endpoint';
import { BankInfo } from 'src/models/bankInfo';
import { apiClient } from './apiClient';

class BankService {
  async getInfo(): Promise<any> {
    const result = await apiClient.get(Endpoint.BANK);
    return result;
  }

  async putInfo(req: BankInfo): Promise<any> {
    const result = await apiClient.put(Endpoint.BANK);
    return {};
  }
}

export const bankService = new BankService();
