import {
  GetProfileRequest,
  GetProfileResponse,
} from 'src/models/reqres/getProfile';
import {
  VerifyEmailRequest,
  VerifyEmailResponse,
} from 'src/models/reqres/verifyEmail';
import { UserRole } from 'src/models/userRole';

class UserService {
  async getProfile(request: GetProfileRequest): Promise<GetProfileResponse> {
    return {
      status: 200,
      data: {
        _id: '',
        username: 'bach',
        email: 'bachbnt@gmail.com',
        role: UserRole.ADMIN,
        phone: '0123456789',
      },
    };
  }

  async verifyEmail(request: VerifyEmailRequest): Promise<VerifyEmailResponse> {
    return {
      status: 200,
      data: {},
    };
  }
}

export const userService = new UserService();
