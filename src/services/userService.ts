import { Endpoint } from 'src/configs/endpoint';
import { ResendEmailRequest } from 'src/models/reqres/resendEmail';
import { VerifyEmailRequest } from 'src/models/reqres/verifyEmail';
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
}

export const userService = new UserService();
