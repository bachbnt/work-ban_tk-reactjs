import axios from 'axios';
import { Key } from 'src/constants/key';
import { SignInRequest, SignInResponse } from 'src/models/reqres/signIn';
import { SignUpRequest, SignUpResponse } from 'src/models/reqres/signUp';
import { SignOutRequest, SignOutResponse } from 'src/models/reqres/signOut';
import {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
} from 'src/models/reqres/forgotPassword';
import { cookie } from 'src/utils/cookie';

class AuthService {
  async signIn(request: SignInRequest): Promise<SignInResponse> {
    cookie.setItem(Key.ACCESS_TOKEN, 'dsd');
    return {
      data: { accessToken: '', refreshToken: '' },
      message: '',
    };
  }
  async signUp(request: SignUpRequest): Promise<SignUpResponse> {
    return {
      data: { accessToken: '', refreshToken: '' },
    };
  }
  async signOut(request: SignOutRequest): Promise<SignOutResponse> {
    cookie.removeItem(Key.ACCESS_TOKEN);
    return {};
  }

  isSignedIn(): boolean {
    const accessToken = cookie.getItem(Key.ACCESS_TOKEN);
    return !!accessToken;
  }

  async forgotPassword(
    request: ForgotPasswordRequest
  ): Promise<ForgotPasswordResponse> {
    return {};
  }
}

export const authService = new AuthService();
