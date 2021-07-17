import { Endpoint } from 'src/configs/endpoint';
import { ResendEmailRequest } from 'src/models/reqres/resendEmail';
import { VerifyEmailRequest } from 'src/models/reqres/verifyEmail';
import { util } from 'src/utils/util';
import { apiClient } from './apiClient';

class UserService {
  async resendEmail(request: ResendEmailRequest): Promise<any> {
    const result = await apiClient.get(Endpoint.RESEND_EMAIL);

    return result;
  }

  async verifyEmail(request: VerifyEmailRequest): Promise<any> {
    const result = await apiClient.get(Endpoint.VERIFY_EMAIL, {
      params: { code: request.code },
    });

    return result;
  }

  async getAll(page?: number): Promise<any> {
    const result = await apiClient.get(Endpoint.USERS, {
      params: { page: page, page_size: 10 },
    });
    return result.data;
  }

  async addMoney(money: number, id: string): Promise<any> {
    const endpoint = util.formatString(Endpoint.ADD_MONEY, {
      id,
    });
    const result = await apiClient.post(endpoint, {
      addMoney: money,
    });
    return result;
  }

  async cutMoney(money: number, id: string): Promise<any> {
    const endpoint = util.formatString(Endpoint.CUT_MONEY, {
      id,
    });
    const result = await apiClient.post(endpoint, {
      cutMoney: money,
    });
    return result;
  }

  async resetPassword(id: string): Promise<any> {
    const endpoint = util.formatString(Endpoint.RESET_PASSWORD, {
      id,
    });
    const result = await apiClient.patch(endpoint);
    return result;
  }

  async getApiKey(): Promise<any> {
    const result = await apiClient.get(Endpoint.API_KEY);
    return result;
  }

  async getMe(): Promise<any> {
    const result = await apiClient.get(Endpoint.ME);
    return result;
  }
}

export const userService = new UserService();
